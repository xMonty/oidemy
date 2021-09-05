import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import { RootState } from 'app/store';

import { ApiError } from 'next/dist/server/api-utils';
import { http } from 'utils/http';
import { ApiStatus } from 'utils/constants';



export type PopularCoursesState = {
  courses: Array<Object>
  apiStatus: ApiStatus
  error: string | null
}

const initialState: PopularCoursesState = {
  courses: [],
  apiStatus: ApiStatus.idle,
  error: null
}

export const fetchPopularCourses = createAsyncThunk('courses/fetchPopular', async (_args, thunkAPI) => {
  try {
    const response = await http.get('courses/popular');
    return response.data;
  } catch (error: unknown) {
    let apiError: ApiError = error as ApiError;
    if(!apiError.message) {
      throw error;
    }
    thunkAPI.rejectWithValue(apiError);
  }
});

export const popularCoursesSlice = createSlice({
  name: 'popularCourses',
  initialState: initialState,
  reducers: {
    clearState: state => {
      state.courses = [];
      state.apiStatus = ApiStatus.idle;
      state.error = null;
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchPopularCourses.pending, state => {
      state.apiStatus = ApiStatus.fetching;
    })
    .addCase(fetchPopularCourses.fulfilled, (state, { payload }) => {
      state.apiStatus = ApiStatus.success;
      state.courses = payload;
      state.error = null;
    })
    .addCase(fetchPopularCourses.rejected, (state, action) => {
      state.apiStatus = ApiStatus.failed;
      if(action.payload) {
        let apiError: ApiError = action.payload as ApiError;
        state.error = apiError.message;
      } else {
        state.error = action.error.message ?? '';
      }
    })
  }
});

export const { clearState } = popularCoursesSlice.actions;
export const PopularCoursesSelector = (state: RootState) => state.popularCourses;
