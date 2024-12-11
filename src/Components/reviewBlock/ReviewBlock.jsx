import React from 'react';
import './AppReview.css'; // Make sure to create a CSS file for your styles

const AppReview = () => {
    return (
        <div className="app-review">
            <div className="app-review__head flex-center--y mb-12">
                <h2 className="app-review__head-title">Ratings &amp; Reviews</h2>
                <div className="app-review__head-action flex-center--y">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 9 9" className="app-review__head-action-icon">
                        <rect width="9" height="2" y="3.5" fill="currentColor" rx="1"></rect>
                        <rect width="9" height="2" x="2.5" y="-3" fill="currentColor" rx="1" transform="rotate(90 2.5 0)"></rect>
                    </svg>
                    <span>Write a review</span>
                </div>
            </div>

            <div className="app-review__main">
                <div className="ratings app-review__main-rating single">
                    <div>
                        <div>
                            <span className="ratings__current">8.4</span>
                            <span className="ratings__max divider">/</span>
                            <span className="ratings__max">10</span>
                        </div>
                        <span className="ratings__rating">943 Ratings</span>
                    </div>
                    <div className="ratings__overview">
                        <div className="ratings__overview-item">
                            <div className="ratings__overview-item-start-wrap">
                                {/* Repeat the star SVG for each star */}
                                {[...Array(5)].map((_, index) => (
                                    <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" className="ratings__overview-item-star">
                                        <path
                                            fill="currentColor"
                                            d="M11.883 3.38c.444-.946 1.79-.946 2.234 0l2.311 4.924c.175.373.524.634.931.696l5.266.804a1.234 1.234 0 0 1 .697 2.083l-3.887 3.984c-.273.28-.398.674-.335 1.06l.907 5.56c.166 1.017-.914 1.778-1.815 1.28l-4.595-2.54a1.235 1.235 0 0 0-1.194 0l-4.595 2.54c-.901.498-1.981-.263-1.815-1.28l.907-5.56a1.234 1.234 0 0 0-.335-1.06l-3.887-3.984a1.234 1.234 0 0 1 .697-2.083L8.64 9a1.23 1.23 0 0 0 .93-.696l2.312-4.923Z"
                                        ></path>
                                    </svg>
                                ))}
                            </div>
                            <div className="ratings__overview-item-progress">
                                <div className="ratings__overview-item-progress-val" style={{ width: '50%' }}></div>
                            </div>
                        </div>
                        <div className="ratings__overview-item">
                            <div className="ratings__overview-item-start-wrap">
                                {/* Repeat the star SVG for each star */}
                                {[...Array(4)].map((_, index) => (
                                    <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" className="ratings__overview-item-star">
                                        <path
                                            fill="currentColor"
                                            d="M11.883 3.38c.444-.946 1.79-.946 2.234 0l2.311 4.924c.175.373.524.634.931.696l5.266.804a1.234 1.234 0 0 1 .697 2.083l-3.887 3.984c-.273.28-.398.674-.335 1.06l.907 5.56c.166 1.017-.914 1.778-1.815 1.28l-4.595-2.54a1.235 1.235 0 0 0-1.194 0l-4.595 2.54c-.901.498-1.981-.263-1.815-1.28l.907-5.56a1.234 1.234 0 0 0-.335-1.06l-3.887-3.984a1.234 1.234 0 0 1 .697-2.083L8.64 9a1.23 1.23 0 0 0 .93-.696l2.312-4.923Z"
                                        ></path>
                                    </svg>
                                ))}
                            </div>
                            <div className="ratings__overview-item-progress">
                                <div className="ratings__overview-item-progress-val" style={{ width: '66.91%' }}></div>
                            </div>
                        </div>
                        <div className="ratings__overview-item">
                            <div className="ratings__overview-item-start-wrap">
                                {/* Repeat the star SVG for each star */}
                                {[...Array(3)].map((_, index) => (
                                    <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" className="ratings__overview-item-star">
                                        <path
                                            fill="currentColor"
                                            d="M11.883 3.38c.444-.946 1.79-.946 2.234 0l2.311 4.924c.175.373.524.634.931.696l5.266.804a1.234 1.234 0 0 1 .697 2.083l-3.887 3.984c-.273.28-.398.674-.335 1.06l.907 5.56c.166 1.017-.914 1.778-1.815 1.28l-4.595-2.54a1.235 1.235 0 0 0-1.194 0l-4.595 2.54c-.901.498-1.981-.263-1.815-1.28l.907-5.56a1.234 1.234 0 0 0-.335-1.06l-3.887-3.984a1.234 1.234 0 0 1 .697-2.083L8.64 9a1.23 1.23 0 0 0 .93-.696l2.312-4.923Z"
                                        ></path>
                                    </svg>
                                ))}
                            </div>
                            <div className="ratings__overview-item-progress">
                                <div className="ratings__overview-item-progress-val" style={{ width: '30%' }}></div>
                            </div>
                        </div>
                        <div className="ratings__overview-item">
                            <div className="ratings__overview-item-start-wrap">
                                {/* Repeat the star SVG for each star */}
                                {[...Array(2)].map((_, index) => (
                                    <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" className="ratings__overview-item-star">
                                        <path
                                            fill="currentColor"
                                            d="M11.883 3.38c.444-.946 1.79-.946 2.234 0l2.311 4.924c.175.373.524.634.931.696l5.266.804a1.234 1.234 0 0 1 .697 2.083l-3.887 3.984c-.273.28-.398.674-.335 1.06l.907 5.56c.166 1.017-.914 1.778-1.815 1.28l-4.595-2.54a1.235 1.235 0 0 0-1.194 0l-4.595 2.54c-.901.498-1.981-.263-1.815-1.28l.907-5.56a1.234 1.234 0 0 0-.335-1.06l-3.887-3.984a1.234 1.234 0 0 1 .697-2.083L8.64 9a1.23 1.23 0 0 0 .93-.696l2.312-4.923Z"
                                        ></path>
                                    </svg>
                                ))}
                            </div>
                            <div className="ratings__overview-item-progress">
                                <div className="ratings__overview-item-progress-val" style={{ width: '80%' }}></div>
                            </div>
                        </div>
                        <div className="ratings__overview-item">
                            <div className="ratings__overview-item-start-wrap">
                                {/* Repeat the star SVG for each star */}
                                {[...Array(1)].map((_, index) => (
                                    <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" className="ratings__overview-item-star">
                                        <path
                                            fill="currentColor"
                                            d="M11.883 3.38c.444-.946 1.79-.946 2.234 0l2.311 4.924c.175.373.524.634.931.696l5.266.804a1.234 1.234 0 0 1 .697 2.083l-3.887 3.984c-.273.28-.398.674-.335 1.06l.907 5.56c.166 1.017-.914 1.778-1.815 1.28l-4.595-2.54a1.235 1.235 0 0 0-1.194 0l-4.595 2.54c-.901.498-1.981-.263-1.815-1.28l.907-5.56a1.234 1.234 0 0 0-.335-1.06l-3.887-3.984a1.234 1.234 0 0 1 .697-2.083L8.64 9a1.23 1.23 0 0 0 .93-.696l2.312-4.923Z"
                                        ></path>
                                    </svg>
                                ))}
                            </div>
                            <div className="ratings__overview-item-progress">
                                <div className="ratings__overview-item-progress-val" style={{ width: '40%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppReview;
