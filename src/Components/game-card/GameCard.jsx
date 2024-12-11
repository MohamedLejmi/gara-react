import React from 'react';
import styles from './GameCard.module.css';
import gameImage from '../../assets/images/game2.png'
import playIcon from '../../assets/icons/duration.svg'
import greenStar from '../../assets/icons/greenStar.svg'

function GameCard() {
  return (
    <article className={styles.gameCard}>
      <div className={styles.imageContainer}>
        <img loading="lazy" src={gameImage} alt="Game cover" className={styles.gameCover} />
      </div>
      <div className={styles.gameInfo}>
        <div className={styles.gameHeader}>
          <h3 className={styles.gameTitle}>GOLAZO</h3>
          <div className={styles.gameRating}>
            <img loading="lazy" src={greenStar} alt="Star icon" className={styles.ratingIcon} />
            <span>7.4</span>
          </div>
        </div>
        <div className={styles.gameMetadata}>
          <div className={styles.gameTypes}>
            <span className={styles.gameType}>SPORT</span>
            <span className={styles.gameType}>ARCADE</span>
          </div>
          <div className={styles.gameDuration}>
            <img loading="lazy" src={playIcon} alt="Clock icon" className={styles.durationIcon} />
            <span>1h30min</span>
          </div>
        </div>
        <p className={styles.gameDescription}>
          Golazo! C'est un jeu de football d'arcade dynamique sans faute ni hors-jeu!
        </p>
      </div>
    </article>
  );
}

export default GameCard;
