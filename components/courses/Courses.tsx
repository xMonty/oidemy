import React from 'react';
import Image from 'next/image';
import styles from './Courses.module.scss';

function Courses() {
  return (
    <div className={styles.container}>
      <div className={styles.courseContainer}>
        <div className={styles.courseImage}>
          <Image objectFit='contain' layout='fill' src='/images/courseimage.jpg' alt='Course'/>
        </div>
        <div>
          <div className={styles.courseName}>Sing a song</div>
          <div className={styles.courseOwner}>Johnny Cash</div>
          <div className={styles.courseRatings}>ratings</div>
          <div className={styles.coursePrice}></div>
        </div>
      </div>
    </div>
  )
}

export default Courses
