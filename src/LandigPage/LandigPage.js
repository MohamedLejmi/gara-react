import React, { useState, useRef } from "react";
import "./Landig.css";
import Modal from "../Components/SignUp/Modal/SignupModal";
import LazyLoad from "react-lazyload";
// import { getGameById } from '../api/GameApi';



const LandigPage = ({ id, tag, countryCode, appUserId }) => {

  // const [game, setGame] = useState(null);
  // const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const carouselRef = useRef(null);
  // useEffect(() => {
  //   const fetchGame = async () => {
  //     try {
  //       const params = { id, tag, countryCode, appUserId };
  //       const gameData = await getGameById(params);
  //       setGame(gameData);
  //     } catch (error) {
  //       setError(error);
  //     }
  //   };

  //   fetchGame();
  // }, [id, tag, countryCode, appUserId]);

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  // if (!game) {
  //   return <div>Loading...</div>;
  // }




  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const scrollCarousel = (direction) => {
    const carousel = carouselRef.current;
    const scrollAmount = 200; 

    if (direction === "left") {
      carousel.scrollLeft -= scrollAmount;
    } else if (direction === "right") {
      carousel.scrollLeft += scrollAmount;
    }
  };

  return (
    <>
      <div className="containerCar">
        <div className="top-background"></div>
        <img src="assets/image/car.png" alt="Car" className="car-image" />
      </div>

      <div className="container">
        <div className="app-details-box">
          <div className="app-information">
            <div className="app-label-status">
              <div className="label">
                <p className="font-h bold text-big">Pako Forever</p>
              </div>
              <div className="app-category">
                <p className="font-h bold text-extra-small">Aventure</p>
              </div>
            </div>
            <div className="app-publisher">
              <button type="button" className="font-p light text-small">
                Paco Game Inc.
              </button>
            </div>
          </div>
          <button
            type="button"
            className="app-action-button"
            onClick={() => { closeModal(); openModal(); }}
          >
            <p className="font-h bold text-small">Download</p>
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </button>
        </div>
        <div className="containerCar">
          <div className="bottom-background">
            <div className="carousel-container">
              <div className="carousel" ref={carouselRef}>
                <div className="carousel-item">
                  <LazyLoad>
                    <img src="assets/image/5.webp" alt=" "></img>
                  </LazyLoad>
                </div>
                <div className="carousel-item">
                  <img src="assets/image/ç.webp" alt=" "></img>
                </div>
                <div className="carousel-item">
                  <img src="assets/image/6.webp" alt=" "></img>
                </div>
                <div className="carousel-item">
                  <img src="assets/image/7.webp" alt=" "></img>
                </div>
                <div className="carousel-item">
                  <LazyLoad>
                    <img src="assets/image/5.webp" alt=" "></img>
                  </LazyLoad>
                </div>
                <div className="carousel-item">
                  <img src="assets/image/6.webp" alt=" "></img>
                </div>
                <div className="carousel-item">
                  <img src="assets/image/_.webp" alt=" "></img>
                </div>
                <div className="carousel-item">
                  <img src="assets/image/6.webp" alt=" "></img>
                </div>
                <div className="carousel-item">
                  <img src="assets/image/ç.webp" alt=" "></img>
                </div>
                <div className="carousel-item">
                  <img src="assets/image/6.webp" alt=" "></img>
                </div>
              </div>
              <button
                className="carousel-btn left-btn"
                onClick={() => scrollCarousel("left")}
              >
                <img
                  src="assets/image/chevron-direction-left-icon.svg"
                  alt=""
                ></img>
              </button>
              <button
                className="carousel-btn right-btn"
                onClick={() => scrollCarousel("right")}
              >
                <img
                  src="assets/image/chevron-direction-left-icon.svg"
                  alt=""
                ></img>
              </button>{" "}
            </div>
          </div>
        </div>

        {modalOpen && <Modal onClose={closeModal} />}
      </div>
    </>
  );
}

export default LandigPage;
