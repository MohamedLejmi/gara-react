import React, { useState, useEffect } from 'react';
import styles from './NewRelease.module.css';
import gameImage from '../../assets/images/game1.png'
import arrowRightCircle from '../../assets/icons/arrowRightCircle.svg'
import greenStar from '../../assets/icons/greenStar.svg'
import grayStar from '../../assets/icons/grayStar.svg'


function NewRelease() {
  const games = [
    {
      title: 'Evoland 2',
      rating: '5.0',
      types: ['ADVENTURE', 'ACTION'],
      description: "An unforgettable 20-hour adventure...",
      img: gameImage
    },
    {
      title: 'Tetragon',
      rating: '5.0',
      types: ['ADVENTURE', 'PUZZLE', 'MYSTERY'],
      description: "Explore a mysterious world full of puzzles...",
      img: gameImage
    },
    {
      title: 'Sparklite',
      rating: '5.0',
      types: ['PUZZLE', 'ACTION'],
      description: "Fight your way through procedural dungeons...",
      img: gameImage
    }
  ];

  const [activeGameIndex, setActiveGameIndex] = useState(0);

  const handleGameClick = (index) => {
    setActiveGameIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveGameIndex((prevIndex) => (prevIndex + 1) % games.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [games.length]);

  const activeGame = games[activeGameIndex];

  return (
      <section className={styles.newRelease}>
        <h2 className={styles.title}>
          New release
          <img loading="lazy" src={arrowRightCircle} alt="" className={styles.titleIcon} />
        </h2>

        <div className={styles.mainGames}>
          <div className={styles.featuredGame}>
            <img
                loading="lazy"
                src={activeGame.img}
                alt={`${activeGame.title} game cover`}
                className={styles.featuredImage}
            />
            <div className={styles.gradientOverlay}>
              <div className={styles.content}>
                <h3 className={styles.heading}>{activeGame.title}</h3>
                <div className={styles.gameInfo}>
                  <p className={styles.description}>{activeGame.description}</p>
                </div>
                <div className={styles.rating}>
                  <img loading="lazy" src={greenStar} alt="Star icon" className={styles.ratingIcon} />
                  <span>{activeGame.rating}</span>
                </div>
              </div>
            </div>
          </div>

          <ul className={styles.gameList}>
            {games.map((game, index) => (
                <li
                    key={index}
                    className={index === activeGameIndex ? styles.listElemActive : styles.listElemNonActive}
                    onClick={() => handleGameClick(index)} // Click to change the active game
                >
                  <div className={styles.gameContent}>
                    <img
                        loading="lazy"
                        src={game.img}
                        alt={`${game.title} thumbnail`}
                        className={styles.gameThumbnail}
                    />
                    <div className={styles.gameDetails}>
                      <div className={styles.namePlateformStars}>
                        <h4 className={styles.gameTitle}>{game.title}</h4>
                        <div className={styles.gameMetadata}>
                          <div className={styles.stars}>
                            <img loading="lazy" src={grayStar} alt="Star icon" className={styles.starIcon} />
                            <span>{game.rating}</span>
                          </div>
                        </div>
                      </div>
                      <div className={styles.gameTypes}>
                        {game.types.map((type, typeIndex) => (
                            <span key={typeIndex} className={styles.gameType}>{type}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
            ))}
          </ul>
        </div>
      </section>
  );
}

export default NewRelease;
