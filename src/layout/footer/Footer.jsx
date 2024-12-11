import React from 'react';
import styles from './Footer.module.css';
import fb from '../../assets/icons/fb.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import instagram from '../../assets/icons/instagram.svg'
import youtube from '../../assets/icons/youtube.svg'

function Footer() {
  const socialIcons = [
    { src: fb, alt: "Facebook" },
    { src: linkedin, alt: "Twitter" },
    { src: instagram, alt: "Instagram" },
    { src: youtube, alt: "YouTube" }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.copyrightsLinks}>
        <nav className={styles.legalLinks}>
          <a href="#content" className={styles.linkElem}>Content</a>
          <a href="#legal" className={styles.linkElem}>Legal</a>
          <a href="#creator" className={styles.linkElem}>Content creator</a>
        </nav>
        <p className={styles.copyrightLink}>Gara © Copyright 2023</p>
      </div>
      <div className={styles.socialMedia}>
        <h2 className={styles.followUs}>Follow us</h2>
        <div className={styles.socialIcons}>
          {socialIcons.map((icon, index) => (
            <a key={index} href={`#${icon.alt.toLowerCase()}`} aria-label={`Follow us on ${icon.alt}`}>
              <img loading="lazy" src={icon.src} alt={icon.alt} className={styles.socialIcon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
