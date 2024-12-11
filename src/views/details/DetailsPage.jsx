import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './DetailsPage.module.css';
import apiResponse from './apiResponse.json'
import DetailsSlider from "./detailsSlider";
import AppInfo from "../../components/appInfo/AppInfo";
import AppReview from "../../components/reviewBlock/ReviewBlock";

const DetailsPage = () => {
    const { id } = useParams();
    const [appData, setAppData] = useState(null);
    const [activeTab, setActiveTab] = useState('overview'); // Tab state

    useEffect(() => {
        setAppData(apiResponse)
    }, [id]);

    if (!appData) return <div>Loading...</div>;

    return (
        <div className={styles.detailsPage}>
            <div className={styles.mainDetails}>
                <div className={styles.tabs}>
                    <button className={`${styles.tabItem} ${activeTab === 'overview' ? styles.activeTab : ''}`} onClick={() => setActiveTab('overview')}>Details</button>
                    <button className={`${styles.tabItem} ${activeTab === 'reviews' ? styles.activeTab : ''}`} onClick={() => setActiveTab('reviews')}>Reviews</button>
                    <div className={`${styles.borderTab} ${activeTab === 'reviews' ? styles.borderTabSecond : ''}`}></div>
                </div>

                <div className="tab-content">
                    {activeTab === 'overview' && (
                        <div className="overview">
                            <div className={styles.sliderContainer}>
                                <DetailsSlider/>
                            </div>
                            <div className={styles.bordredBox}>
                                <AppInfo/>
                                <div className={styles.gameDescription}>
                                    The post-apocalyptic sci-fi survival RPG game Earth:Revival is set in an alien-invaded world and centers around the core experience of open-world survival. It has undergone significant industry innovation and upgrades. Experience groundbreaking
                                </div>
                            </div>
                            <AppReview/>
                            <div className={styles.showsInMobile}>
                                <div className={styles.bordredBox}>
                                    <div className={styles.widgetBox}>
                                        <div className={styles.widgetBoxTitle}>Announcements</div>
                                        <div className={styles.widgetBoxContent}>
                                            <div className={styles.releasedDate}>Aug 14, 2024</div>
                                            Scheduled to release on Aug 14, 2024 for Android and iOS.
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.widgetBox}>
                                    <div className={styles.widgetBoxTitle}>About the Game</div>
                                    <div className={styles.widgetBoxContent}>
                                        <div className={styles.infoRow}>
                            <span className={styles.infoLeftCol}>
                                Provider
                            </span>
                                            <span className={styles.infoRightCol}>
                                Nuverse
                            </span>
                                        </div>
                                        <div className={styles.infoRow}>
                            <span className={styles.infoLeftCol}>
                                Followers
                            </span>
                                            <span className={styles.infoRightCol}>
                                463K
                            </span>
                                        </div>
                                        <div className={styles.infoRow}>
                            <span className={styles.infoLeftCol}>
                                Downloads
                            </span>
                                            <span className={styles.infoRightCol}>
                                126K
                            </span>
                                        </div>
                                        <div className={styles.infoRow}>
                            <span className={styles.infoLeftCol}>
                                Current Version
                            </span>
                                            <span className={styles.infoRightCol}>
                                1.8.23
                            </span>
                                        </div>
                                        <div className={styles.infoRow}>
                            <span className={styles.infoLeftCol}>
                                Size
                            </span>
                                            <span className={styles.infoRightCol}>
                                1.92 GB
                            </span>
                                        </div>
                                        <div className={styles.infoRow}>
                            <span className={styles.infoLeftCol}>
                                Release date
                            </span>
                                            <span className={styles.infoRightCol}>
                                02/09/2023
                            </span>
                                        </div>
                                        <div className={styles.infoRow}>
                            <span className={styles.infoLeftCol}>
                                Last Updated on
                            </span>
                                            <span className={styles.infoRightCol}>
                                08/22/2024
                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'reviews' && (
                        <div className="reviews">
                            <AppInfo/>
                            <AppReview/>
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.rightDetails}>
                <div className={styles.widgetBox}>
                    <div className={styles.widgetBoxTitle}>Announcements</div>
                    <div className={styles.widgetBoxContent}>
                        <div className={styles.releasedDate}>Aug 14, 2024</div>
                        Scheduled to release on Aug 14, 2024 for Android and iOS.
                    </div>
                </div>
                <div className={styles.widgetBox}>
                    <div className={styles.widgetBoxTitle}>Related Games</div>
                    <AppInfo showRating={true} showButton={false} showCategory={false} />
                    <div className={styles.bordredBox}>
                        <AppInfo showRating={true} showButton={false} showCategory={false} />
                    </div>
                    <div className={styles.bordredBox}>
                        <AppInfo showRating={true} showButton={false} showCategory={false} />
                    </div>
                    <div className={styles.bordredBox}>
                        <AppInfo showRating={true} showButton={false} showCategory={false} />
                    </div>
                    <AppInfo showRating={true} showButton={false} showCategory={false} />
                </div>
                <div className={styles.widgetBox}>
                    <div className={styles.widgetBoxTitle}>About the Game</div>
                    <div className={styles.widgetBoxContent}>
                        <div className={styles.infoRow}>
                            <span className={styles.infoLeftCol}>
                                Provider
                            </span>
                            <span className={styles.infoRightCol}>
                                Nuverse
                            </span>
                        </div>
                        <div className={styles.infoRow}>
                            <span className={styles.infoLeftCol}>
                                Followers
                            </span>
                            <span className={styles.infoRightCol}>
                                463K
                            </span>
                        </div>
                        <div className={styles.infoRow}>
                            <span className={styles.infoLeftCol}>
                                Downloads
                            </span>
                            <span className={styles.infoRightCol}>
                                126K
                            </span>
                        </div>
                        <div className={styles.infoRow}>
                            <span className={styles.infoLeftCol}>
                                Current Version
                            </span>
                            <span className={styles.infoRightCol}>
                                1.8.23
                            </span>
                        </div>
                        <div className={styles.infoRow}>
                            <span className={styles.infoLeftCol}>
                                Size
                            </span>
                            <span className={styles.infoRightCol}>
                                1.92 GB
                            </span>
                        </div>
                        <div className={styles.infoRow}>
                            <span className={styles.infoLeftCol}>
                                Release date
                            </span>
                            <span className={styles.infoRightCol}>
                                02/09/2023
                            </span>
                        </div>
                        <div className={styles.infoRow}>
                            <span className={styles.infoLeftCol}>
                                Last Updated on
                            </span>
                            <span className={styles.infoRightCol}>
                                08/22/2024
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;
