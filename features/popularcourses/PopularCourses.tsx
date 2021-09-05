import { useAppDispatch, useAppSelector } from 'app/hooks';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { fetchPopularCourses, PopularCoursesSelector } from './PopularCoursesSlice'

const PopularCourses = () => {
  const { apiStatus, courses, error } = useAppSelector(PopularCoursesSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('fetching courses');
    dispatch(fetchPopularCourses());
  }, []);

  useEffect(() => {
    console.log('apiStatus', apiStatus);
  }, [apiStatus]);

  useEffect(() => {
    console.log('error', error);
  }, [error]);

  useEffect(() => {
    console.log('courses', courses);
  }, [courses]);

  return (
    <div>

    </div>
  )
}

export default PopularCourses
