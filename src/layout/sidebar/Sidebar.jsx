import React from 'react';
import { NavLink} from 'react-router-dom';  // Import Link from react-router-dom
import styles from './Sidebar.module.css';
import Footer from "../footer/Footer";
import toogleIcon from "../../assets/images/menu.png";
import garaLogo from "../../assets/images/garaLogo.png";
import homeIcon from "../../assets/icons/homeIcon.svg";

function Sidebar({ isOpen, toggleSidebar }) {
    const navItems = [
        { name: 'Homepage', path: '/' },
        { name: 'Games', path: '/games' },
        { name: 'Comics', path: '/comics' },
        { name: 'Animation', path: '/animation' }
    ];

    return (
        <aside className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
            <div>
                <nav className={styles.tabs}>
                    <div className={styles.logoBlock}>
                        <img className={styles.toogleMenu} src={toogleIcon} onClick={toggleSidebar} alt={'menu'} />
                        <img loading="lazy" src={garaLogo} alt="Logo" className={styles.logo} />
                    </div>
                    {navItems.map((item, index) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                                isActive ? styles.linkActive : styles.linkNonActive
                            }
                        >
                            <img loading="lazy" src={homeIcon} alt="" className={styles.navIcon} />
                            {item.name}
                        </NavLink>
                    ))}
                </nav>
                <button className={styles.registrationBtn}>Registration / login</button>
            </div>
            <Footer />
        </aside>
    );
}

export default Sidebar;
