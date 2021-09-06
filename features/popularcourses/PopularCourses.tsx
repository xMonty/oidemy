import { useAppDispatch, useAppSelector } from 'app/hooks';
import Courses from 'components/courses/Courses';
import React, { useEffect, useState } from 'react'
import { fetchPopularCourses, PopularCoursesSelector } from './PopularCoursesSlice'

const PopularCourses = () => {
  const { apiStatus, courses, error } = useAppSelector(PopularCoursesSelector);
  const dispatch = useAppDispatch();

  const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);


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
