import React, {useRef} from 'react';
import styles from './ContentSection.module.css';
import ComicCard from "../comic-card/ComicCard";
import GameCard from "../game-card/GameCard";
import SmallGameCard from "../small-game-card/SmallGameCard";

function ContentSection({ title, icon, type= 'Comic' }) {
    const cardListRef = useRef(null);

    // Scroll functions for Previous and Next buttons
    const handleScroll = (direction) => {
        const scrollAmount = 300; // Adjust this value based on how much you want to scroll
        if (cardListRef.current) {
            cardListRef.current.scrollBy({
                left: direction === 'next' ? scrollAmount : -scrollAmount,
                behavior: 'smooth',
            });
        }
    };
  return (
    <section className={styles.contentSection}>
        {title !== '' && (
            <h2 className={styles.sectionTitle}>
                {title}
                <img loading="lazy" src={icon} alt="" className={styles.titleIcon} />
            </h2>
        )}
        <div className={styles.cardListWrapper}>
            <div className={styles.cardList} ref={cardListRef}>
                {type === 'Comic' ? (
                    Array.from({ length: 5 }, (_, i) => <ComicCard key={i} />)
                ) : type === 'Game' ? (
                    Array.from({ length: 5 }, (_, i) => <GameCard key={i} />)
                ) : (
                    Array.from({ length: 3 }, (_, i) => <SmallGameCard key={i} />)
                )}
                {/* Previous and Next buttons (visible on desktop on hover) */}
            </div>
            <button
                className={`${styles.navButton} ${styles.prevButton}`}
                onClick={() => handleScroll('prev')}
            >
                &#8249; {/* Left arrow icon */}
            </button>
            <button
                className={`${styles.navButton} ${styles.nextButton}`}
                onClick={() => handleScroll('next')}
            >
                &#8250; {/* Right arrow icon */}
            </button>
        </div>
    </section>
  );
}

export default ContentSection;
