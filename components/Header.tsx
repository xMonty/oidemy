import React, { useState } from 'react'
import styles from '../styles/Header.module.scss'

function Header() {
	const [open, setOpen] = useState(false);

	return (
		<header className={styles.container}>
  		<div className={styles.menuBtn}>
        <a onClick={() => setOpen(!open)}>
					<span className={open ? `${styles.menuBtn__burger} ` + ` ${styles.open}` : `${styles.menuBtn__burger}`}></span>
				</a>
      </div>
      <div className={styles.navLogo}><a href='#'>Oidemy</a></div>
    
      <nav className={open ? `${styles.nav} ` + ` ${styles.open}` : `${styles.nav}`}>
        <ul className={open ? `${styles.menuNav} ` + ` ${styles.open}` : `${styles.menuNav}`}>
          <li className={open ? `${styles.menuNav__item} ` + ` ${styles.open}` : `${styles.menuNav__item}`}>
            <a href="index.html" className={styles.menuNav__link}>
              Home
            </a>
          </li>
          <li className={open ? `${styles.menuNav__item} ` + ` ${styles.open}` : `${styles.menuNav__item}`}>
            <a href="index.html" className={styles.menuNav__link}>
              About Me
            </a>
          </li>
          <li className={open ? `${styles.menuNav__item} ` + ` ${styles.open}` : `${styles.menuNav__item}`}>
            <a href="index.html" className={styles.menuNav__link}>
              My Projects
            </a>
          </li>
          <li className={open ? `${styles.menuNav__item} ` + ` ${styles.open}` : `${styles.menuNav__item}`}>
            <a href="index.html" className={styles.menuNav__link}>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>

		</header>
	)
}

export default Header
