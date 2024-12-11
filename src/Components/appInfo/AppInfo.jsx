import React from 'react';
import styles from './AppInfo.module.css';
import gameImage from '../../assets/images/game1.png'


const AppInfo = ({showButton= true, showRating = false, showCategory = true}) => {
    return (
        <div className={styles.appInfo}>
            <div className={styles.appInfoBase}>
                <div className={styles.appInfoBaseInfo}>
                    <div
                        className={`${styles.tapImageWrapper} ${styles.lazy} ${styles.appInfoBaseInfoAvatar}`}
                        style={{ fontSize: '0px', maxWidth: '100%' }}
                    >
                        <img
                            src={gameImage}
                            alt="Earth:Revival"
                            loading="lazy"
                            className={`${styles.tapImage} ${styles.objectFitCover} ${styles.lazyImageLoaded}`}
                        />
                    </div>

                    <div className={styles.appInfoBaseInfoDetail}>
                        <div className={`${styles.appTitle} ${styles.tapEllipsis2} mb-4`}>
                            <h1
                                className={`${styles.inline} ${styles.appTitleContent} ${styles.lineHeight100} ${styles.whiteTitle} ${styles.fontBold} ${styles.my0} ${styles.lineHeight135}`}
                                title="Earth:Revival"
                            >
                                Earth:Revival
                            </h1>
                            {showCategory && (
                                <span
                                    className={`${styles.appTitleLabel} px-4 py-1 ml-4 border-radius-4 white-subtitle font-11 line-height-135`}
                                    style={{ backgroundColor: 'var(--black-20)', color: 'var(--black-70)', position: 'relative', top: '0px' }}
                                >Global</span>
                            )}
                        </div>

                        <div className={`${styles.flex} ${styles.flexCenterY} mb-4 ${styles.appInfoBaseInfoTags}`}>
                            <div className={`${styles.flex} ${styles.flexCenterY} ${styles.appPlatforms} ${styles.afterHasDot}`}>
                                {showRating && (
                                    <div className={`${styles.flex} ${styles.flexCenterY} ${styles.appTags}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26"
                                             className="aside-app__item-rate-icon icon-size-12 mr-2" data-v-8555bb84="">
                                            <path fill="currentColor"
                                                  d="M11.883 3.38c.444-.946 1.79-.946 2.234 0l2.311 4.924c.175.373.524.634.931.696l5.266.804a1.234 1.234 0 0 1 .697 2.083l-3.887 3.984c-.273.28-.398.674-.335 1.06l.907 5.56c.166 1.017-.914 1.778-1.815 1.28l-4.595-2.54a1.235 1.235 0 0 0-1.194 0l-4.595 2.54c-.901.498-1.981-.263-1.815-1.28l.907-5.56a1.234 1.234 0 0 0-.335-1.06l-3.887-3.984a1.234 1.234 0 0 1 .697-2.083L8.64 9a1.23 1.23 0 0 0 .93-.696l2.312-4.923Z"></path>
                                        </svg>
                                        <a href="/tag/action" className={`${styles.tapRouter} cursor-pointer ${styles.appTagsItem}`}>8.1</a>
                                    </div>
                                )}

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" className={styles.appPlatformsIcon}>
                                    <path
                                        fill="currentColor"
                                        d="M2.834 3.875h6.214v4.781c0 .523-.28.799-.804.8H7.86c0 .553.006 1.091-.002 1.63a.652.652 0 0 1-.624.622c-.355.013-.68-.233-.692-.574-.02-.55-.006-1.103-.006-1.667h-1.19v.657c-.002.323.005.646-.006.969a.649.649 0 0 1-.566.612.664.664 0 0 1-.725-.454.737.737 0 0 1-.034-.213c-.003-.459-.002-.917-.001-1.376 0-.063.01-.126.018-.207h-.457c-.449-.003-.74-.294-.741-.744V3.876z"
                                    />
                                </svg>

                                {/* Second platform icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" className={`${styles.appPlatformsIcon} ml-4`}>
                                    <path
                                        fill="currentColor"
                                        d="M10.433 8.897a6.03 6.03 0 0 1-.59 1.062c-.31.443-.567.75-.763.922-.304.28-.629.422-.978.43-.25 0-.551-.072-.904-.216a2.573 2.573 0 0 0-.972-.214c-.31 0-.645.072-1 .214-.356.142-.645.22-.865.226-.334.015-.668-.133-1-.443-.213-.187-.478-.504-.794-.951a6.645 6.645 0 0 1-.843-1.672 6.126 6.126 0 0 1-.353-1.993c0-.738.16-1.373.479-1.904.24-.418.585-.766 1-1.012.41-.244.876-.376 1.353-.382.264 0 .614.081 1.047.244.432.162.709.244.832.244.09 0 .397-.097.921-.29.494-.177.91-.25 1.253-.222.924.075 1.62.44 2.08 1.096-.827.5-1.234 1.202-1.228 2.102.006.702.262 1.286.762 1.75.221.212.48.381.762.5-.066.176-.13.346-.2.509z"
                                    />
                                </svg>
                            </div>

                            {!showRating && (
                                <div className={`${styles.flex} ${styles.flexCenterY} ${styles.appTags}`}>
                                    <a href="/tag/fps" className={`${styles.tapRouter} cursor-pointer ${styles.appTagsItem} ${styles.afterHasDot}`}>FPS</a>
                                    <a href="/tag/action" className={`${styles.tapRouter} cursor-pointer ${styles.appTagsItem}`}>Action</a>
                                </div>
                            )}
                        </div>

                        <div className={`${styles.flex} ${styles.flexCenterY} flex-wrap`}>
                            {showRating && (
                                <div className={`${styles.flex} ${styles.flexCenterY} ${styles.appTags}`}>
                                    <a href="/tag/fps" className={`${styles.tapRouter} cursor-pointer ${styles.appTagsItem} ${styles.afterHasDot}`}>FPS</a>
                                    <a href="/tag/action" className={`${styles.tapRouter} cursor-pointer ${styles.appTagsItem}`}>Action</a>
                                </div>
                            )}
                            {!showRating && (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 17" className={styles.appInfoBaseInfoDetailDeveloperIcon}>
                                        <path fill="currentColor" d="M6.857 1.16a2.286 2.286 0 0 1 2.286 0l4.642 2.68a2.286 2.286 0 0 1 1.143 1.98v5.36c0 .817-.436 1.572-1.143 1.98l-4.642 2.68a2.286 2.286 0 0 1-2.286 0l-4.642-2.68a2.286 2.286 0 0 1-1.143-1.98V5.82c0-.817.435-1.572 1.143-1.98l4.642-2.68Z" />
                                    </svg>
                                    <span className={styles.appInfoBaseInfoDetailDeveloperName}>Nuverse</span>
                                </>
                            )}

                        </div>
                    </div>
                </div>

                {showButton && (
                    <div className={`${styles.appInfoBaseButton} ${styles.flex}`}>
                        <div className={styles.appButton}>
                            <button className={`${styles.appButtonV2} font-16 font-bold px-12 ${styles.flexCenterY} ${styles.flexCenterX} primary`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" className={`${styles.appButtonIcon} icon-size-18 mr-6`}>
                                    <path fill="currentColor" d="M2.834 3.875h6.214v4.781c0 .523-.28.799-.804.8H7.86c0 .553.006 1.091-.002 1.63a.652.652 0 0 1-.624.622c-.355.013-.68-.233-.692-.574-.02-.55-.006-1.103-.006-1.667h-1.19v.657c-.002.323.005.646-.006.969a.649.649 0 0 1-.566.612.664.664 0 0 1-.725-.454.737.737 0 0 1-.034-.213c-.003-.459-.002-.917-.001-1.376 0-.063.01-.126.018-.207h-.457c-.449-.003-.74-.294-.741-.744V3.876z" />
                                </svg>
                                <h2 className="m-0 font-bold font-16">Download</h2>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AppInfo;
