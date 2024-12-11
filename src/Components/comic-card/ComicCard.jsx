import React from 'react';
import styles from './ComicCard.module.css';
import comicImage from '../../assets/images/comic.png'
import greenStar from '../../assets/icons/greenStar.svg'
import android from '../../assets/icons/android.svg'
import cloud from '../../assets/icons/cloud.svg'
import desktop from '../../assets/icons/desktop.svg'


function ComicCard() {
  return (
    <article className={styles.comicCard}>
      <img loading="lazy" src={comicImage} alt="Comic cover" className={styles.comicCover} />
      <div className={styles.comicDetails}>
        <div className={styles.comicInfo}>
          <h3 className={styles.comicTitle}>TEMPETE SUR BANGUI</h3>
          <div className={styles.comicTypes}>
            <span className={styles.comicType}>COMIC</span>
            <span className={styles.comicType}>WAR</span>
            <img loading="lazy" src={android} alt="" className={styles.typeIcon} />
            <img loading="lazy" src={cloud} alt="" className={styles.typeIcon} />
            <img loading="lazy" src={desktop} alt="" className={styles.typeIcon} />
          </div>
        </div>
        <div className={styles.comicRating}>
          <div className={styles.stars}>
            <img loading="lazy" src={greenStar} alt="Star icon" className={styles.starIcon} />
            <span>5.0</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ComicCard;
