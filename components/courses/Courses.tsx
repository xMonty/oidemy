import React from 'react';
import Image from 'next/image';
import styles from './Courses.module.scss';
import { ICourse } from 'models/course';
import { Rating, RatingView } from 'react-simple-star-rating'

interface Props {
  courses: ICourse[]
}

function Courses( { courses } : Props ) {
  return (
    <div >
      {
        <ul className={styles.container}>
          {
            courses.map( e => {
              return (
                <div className={styles.courseContainer}>
                  <div className={styles.courseImage}>
                    <Image objectFit='contain' layout='fill' src='/images/courseimage.jpg' alt='Course'/>
                  </div>
                  <div>
                    <div className={styles.courseName}>{e.name}</div>
                    <div className={styles.courseOwner}>Johnny Cash</div>
                    <div className={styles.courseRatings}>
                      <Rating onClick={()=>{}} ratingValue={parseFloat(e.ratings)}/>
                    </div>
                    <div className={styles.coursePrice}></div>
                  </div>
                </div>
              )
            })
          }
        </ul>
      }
    </div>
  )
}

export default Courses
