import React from 'react';
import styles from './Header.module.css';
import toogleIcon from '../../assets/images/menu.png'
import garaLogo from '../../assets/images/garaLogo.svg'
import garaLogoSmall from '../../assets/images/garaLogoSmall.svg'
import search from '../../assets/icons/search.svg'
import global from '../../assets/icons/global.svg'

function Header({ toggleSidebar }) {
  return (
    <header className={styles.header}>
      <div className={styles.gradientGreenTop}>
        <img className={styles.toogleMenu} src={toogleIcon} onClick={toggleSidebar} alt={'menu'}/>
        <img loading="lazy" src={garaLogo} alt="Logo" className={styles.logo} />
        <div className={styles.headerContent}>
          <div className={styles.container}>
            <form className={styles.searchbar}>
              <label htmlFor="searchInput" className={styles.visuallyHidden}>Search games, comics, animations</label>
              <img loading="lazy" src={search} alt="Search icon" className={styles.searchIcon} />
              <input type="text" id="searchInput" className={styles.searchInput} placeholder="Games, comics, animations" />
            </form>
            <div className={styles.cta}>
              <button className={styles.downloadBtn}>
                <img loading="lazy" src={garaLogoSmall} alt="" className={styles.downloadIcon} />
                <span>Download Gara store</span>
              </button>
              <img loading="lazy" src={global} alt="User profile" className={styles.profileIcon} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
