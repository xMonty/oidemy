import React from 'react';
import styles from './CatMenu.module.scss';

function CatMenu() {
  return (
    <div className={styles.container}>
      <li>
        <a href="index.html">
          Development
        </a>
      </li>
      <li>
        <a href="index.html">
          Business
        </a>
      </li>
      <li>
        <a href="index.html">
          Finance & Accounting
        </a>
      </li>
      <li>
        <a href="index.html">
          IT & Software
        </a>
      </li>
    </div>
  )
}

export default CatMenu
