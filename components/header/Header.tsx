import React, { useState } from 'react'
import styles from '../../styles/Header.module.scss'
import CatMenu from './CatMenu';
import SubMenu from './SubMenu';

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
      <div className={styles.navCategories}>
        Categories
        <div className={styles.catMenu}><CatMenu/></div>
      </div>
			<div className={styles.navSearch}>
        <span>Search</span>
        <input className={styles.search}/>
      </div>
			<div className={styles.navCart}>Cart</div>
			<div className={styles.navLogin}>Login</div>
			<div className={styles.navSignup}>Signup</div>

      <nav className={open ? `${styles.nav} ` + ` ${styles.open}` : `${styles.nav}`}>
        <ul className={open ? `${styles.menuNav} ` + ` ${styles.open}` : `${styles.menuNav}`}>
          <SubMenu/>
        </ul>
        <a onClick={() => setOpen(!open)}><div className={open ? `${styles.grayOverlay} ` + ` ${styles.open}` : `${styles.grayOverlay}`}></div></a>
      </nav>

		</header>
	)
}

export default Header
