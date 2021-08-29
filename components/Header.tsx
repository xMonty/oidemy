import React, { useState } from 'react'
import styles from '../styles/Header.module.scss'

function Header() {
	const [open, setOpen] = useState(false);

	return (
		<header className={styles.container}>
			<div className={styles.navLogo}><a href='#'>Oidemy</a></div>
			<a onClick={() => setOpen(!open)}>
				<div className={`${styles.menuBtn}`}>
					<span className={open ? `${styles.menuBtn__burger} ` + ` ${styles.open}` : `${styles.menuBtn__burger}`}></span>
				</div>
			</a>
		</header>
	)
}

export default Header
