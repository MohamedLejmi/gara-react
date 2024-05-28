// src/App.js

import React, { useState } from "react";

import "./SignUp.css";

import Modal from "../SignUp/Modal/SignUpWhatsappmodal";

import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../fireBaseConfig/Firebase";
import { useGoogleLogin } from "@react-oauth/google";

function SignUp() {
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        await signInWithPopup(auth, googleProvider);
        console.log("Successfully signed in with Google");
      } catch (error) {
        console.error("Error signing in with Google: ", error);
      }
    },
    onError: (error) => console.error("Google Login Error: ", error),
  });

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(false);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="bottomsheet-container">
      <div className="app-bar-box">
        <div className="left-bar"></div>
        <div className="right-bar"></div>
      </div>

      <div className="auth-container">
        <div className="auth-infos">
          <p className="font-h bold text-extra-big label">
            Inscrit toi pour continuer
          </p>
          <p className="font-p light text-big description">
            Des centaines de jeux, de BD africaines et bien plus t'attendent sur
            Gara !
          </p>
        </div>
      </div>
      <div className="auth-context-gif-box">
        <video muted autoPlay loop playsInline>
          <source src="assets/media/gifs/games.webm" type="video/webm" />
        </video>
        <video muted autoPlay loop playsInline>
          <source src="assets/media/gifs/books.webm" type="video/webm" />
        </video>
        <video muted autoPlay loop playsInline>
          <source src="assets/media/gifs/films.webm" type="video/webm" />
        </video>
      </div>

      <div className="tab-box">
        <div className="tab dark-green">
          <button type="button" className="tab-item  left-tab ">
            <p className="font-p bold text-underlined">Se Connecter</p>
          </button>
          <button type="button" className="tab-item  right-tab ">
            <p className="font-p regular text">S'inscrire</p>
          </button>
        </div>
      </div>

      <div className="auth-context ">
        <p className="font-h light text-small">S'inscrire avec...</p>
      </div>
      <div className="social-auth-box ">
        <div
          className="social-auth-button cursor-pointer "
          onClick={() => login()}
        >
          <div className="social-icon">
            <img
              alt=""
              loading="lazy"
              fetchpriority="high"
              src="assets/media/icons/google-social.svg"
              className="img"
            ></img>
          </div>
          <div className="social-text">
            <p className="font-h bold text-medium"> S'inscrire avec google </p>
          </div>
        </div>
        <div className="social-auth-button cursor-pointer" onClick={() => { closeModal(); openModal(); }}>
          <div className="social-icon">
            <img
              alt=""
              loading="lazy"
              fetchpriority="high"
              src="assets/image/WhatsApp.svg.webp"
              className="img"
            ></img>
          </div>
          <div className="social-text">
            <p className="font-h bold text-medium">
              {" "}
              S'inscrire avec whatsApp{" "}
            </p>
          </div>
        </div>
      </div>
      {modalOpen && <Modal onClose={closeModal} closeModal={closeModal} />}
    </div>
  );
}

export default SignUp;
