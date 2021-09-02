import React from 'react'
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.sections}>
        <div>Oidemy Business</div>
        <div>Lorem ipsum dolor sit amet.</div>
        <div>Lorem ipsum</div>
      </div>
      <div className={styles.sections}></div>
      <div className={styles.sections}></div>
      <div className={styles.sections}></div>
      <div className={styles.sections}></div>
    </footer>
  )
}

export default Footer
