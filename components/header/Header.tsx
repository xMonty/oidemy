import React, { useState } from 'react'
import styles from './Header.module.scss'
import CatMenu from './CatMenu';
import SubMenu from './SubMenu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Controls from 'common/Controls/Controls';

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
			<div className={styles.navCart}><FontAwesomeIcon icon={faCartPlus} /></div>
			<div className={styles.navLogin}><Controls.UdButton type={Controls.UdButtonType.primaryBk} onClick={()=>{}}>Login</Controls.UdButton></div>
			<div className={styles.navSignup}><Controls.UdButton type={Controls.UdButtonType.secondaryBk} onClick={()=>{}}>SignUp</Controls.UdButton></div>

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
