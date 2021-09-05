import { useAppDispatch, useAppSelector } from 'app/hooks';
import Courses from 'components/courses/Courses';
import React, { useEffect } from 'react'
import { fetchPopularCourses, PopularCoursesSelector } from './PopularCoursesSlice'

const PopularCourses = () => {
  const { apiStatus, courses, error } = useAppSelector(PopularCoursesSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPopularCourses());
  }, []);

  return (
    <div>
      <Courses courses={courses} />
    </div>
  )
}

export default PopularCourses
