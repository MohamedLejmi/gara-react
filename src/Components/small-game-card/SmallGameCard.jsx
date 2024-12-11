import styles from './SmallGameCard.module.css'
import cover from '../../assets/images/comic.png'
import android from '../../assets/icons/android.svg'
import cloud from '../../assets/icons/cloud.svg'
import desktop from '../../assets/icons/desktop.svg'
import greenStar from '../../assets/icons/greenStar.svg'
function SmallGameCard() {
    return (
        <article className={styles.smallGameCard}>
            <img loading="lazy" src={cover} alt="smallGame cover" className={styles.smallGameCover} />
            <div className={styles.smallGameDetails}>
                <div className={styles.smallGameInfo}>
                    <h3 className={styles.smallGameTitle}>TEMPETE SUR BANGUI</h3>
                    <div className={styles.smallGameTypes}>
                        <span className={styles.smallGameType}>COMIC</span>
                        <span className={styles.smallGameType}>WAR</span>
                    </div>
                    <div className={styles.smallGameTypes}>
                        <img loading="lazy" src={android} alt="" className={styles.typeIcon} />
                        <img loading="lazy" src={cloud} alt="" className={styles.typeIcon} />
                        <img loading="lazy" src={desktop} alt="" className={styles.typeIcon} />
                    </div>
                    <div className={styles.smallGameRating}>
                        <div className={styles.stars}>
                            <img loading="lazy" src={greenStar} alt="Star icon" className={styles.starIcon} />
                            <span>5.0</span>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
export default SmallGameCard
