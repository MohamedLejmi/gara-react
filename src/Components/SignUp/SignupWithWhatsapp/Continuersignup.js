// src/App.js

import React from "react";
import "./SignUp.css";

function SignUp() {
  return (
    <div className="bottomsheet-container">
      <div className="app-bar-box">
        <div className="handle-bar-box">
          <div className="left-bar"></div>
          <div className="right-bar"></div>
        </div>

        <div className="navigation-box cursor-pointer">
          <img
            alt=""
            loading="lazy"
            fetchpriority="high"
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNyIgc3R5bGU9InRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7IiBoZWlnaHQ9IjkiIHZpZXdCb3g9IjAgMCA3IDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICAgICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjYxMTA0IDAuNzkyMzE4QzIuMTM1MDMgMC4zOTkzMTcgMS4zODIgMC40MDM3NTEgMC45MDM3NjQgMC43OTg1ODdDMC42NTA0NjQgMS4wMDc3MSAwLjUgMS4zMDQ4IDAuNSAxLjYyNjExQzAuNSAxLjk0NzQzIDAuNjUwNDY0IDIuMjQ0NTEgMC45MDM3NjQgMi40NTM2NEwzLjM4Mjg0IDQuNTAwNEwwLjkwMzc2NCA2LjU0NzE1QzAuNjUwNDY0IDYuNzU2MjggMC41IDcuMDUzMzYgMC41IDcuMzc0NjhDMC41IDcuNjk2IDAuNjUwNDY0IDcuOTkzMDggMC45MDM3NjQgOC4yMDIyMUMxLjM4NDY5IDguNTk5MjcgMi4xMzAxMiA4LjU5OTI3IDIuNjExMDQgOC4yMDIyMUw2LjA5NjI0IDUuMzI0NzlDNi4zNDk1NCA1LjExNTY2IDYuNSA0LjgxODU4IDYuNSA0LjQ5NzI2QzYuNSA0LjE3NTk0IDYuMzQ5NTQgMy44Nzg4NiA2LjA5NjI0IDMuNjY5NzRMMi42MTEwNCAwLjc5MjMxOFoiIGZpbGw9IiMzNERCOEEiLz4KICAgICAgICA8L3N2Zz4KICAgICAgICA="
          ></img>
        </div>
      </div>

      <div className="auth-container">
        <div className="auth-infos">
          <p className="font-h bold text-extra-big label">
            Connectez-vous pour continuer{" "}
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
      <div className="text-field-container ">
        <div className="text-field">
          <div className="otp-input">
            <input
              type="number"
              maxLength="1"
              className="font-h bold text-small"
            ></input>
            <input
              type="number"
              maxLength="1"
              className="font-h bold text-small"
            ></input>
            <input
              type="number"
              maxLength="1"
              className="font-h bold text-small"
            ></input>
            <input
              type="number"
              maxLength="1"
              className="font-h bold text-small"
            ></input>

            <input
              type="number"
              maxLength="1"
              className="font-h bold text-small"
            ></input>
            <input
              type="number"
              maxLength="1"
              className="font-h bold text-small"
            ></input>
          </div>
        </div>
      </div>
      <div class="resend-otp-button">
        <p class="font-h light text-small">renvoyer OTP</p>
      </div>

      <button type="button" className="action-button">
        <div className="button-label ">
          <p className="font-h bold text-medium">Continue</p>
        </div>
        <div className="arrow-right ">
          <img
            alt=""
            loading="lazy"
            fetchpriority="high"
            className="arrow-image"
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNyIgc3R5bGU9InRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyIgaGVpZ2h0PSI5IiB2aWV3Qm94PSIwIDAgNyA5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMi42MTEwNCAwLjc5MjMxOEMyLjEzNTAzIDAuMzk5MzE3IDEuMzgyIDAuNDAzNzUxIDAuOTAzNzY0IDAuNzk4NTg3QzAuNjUwNDY0IDEuMDA3NzEgMC41IDEuMzA0OCAwLjUgMS42MjYxMUMwLjUgMS45NDc0MyAwLjY1MDQ2NCAyLjI0NDUxIDAuOTAzNzY0IDIuNDUzNjRMMy4zODI4NCA0LjUwMDRMMC45MDM3NjQgNi41NDcxNUMwLjY1MDQ2NCA2Ljc1NjI4IDAuNSA3LjA1MzM2IDAuNSA3LjM3NDY4QzAuNSA3LjY5NiAwLjY1MDQ2NCA3Ljk5MzA4IDAuOTAzNzY0IDguMjAyMjFDMS4zODQ2OSA4LjU5OTI3IDIuMTMwMTIgOC41OTkyNyAyLjYxMTA0IDguMjAyMjFMNi4wOTYyNCA1LjMyNDc5QzYuMzQ5NTQgNS4xMTU2NiA2LjUgNC44MTg1OCA2LjUgNC40OTcyNkM2LjUgNC4xNzU5NCA2LjM0OTU0IDMuODc4ODYgNi4wOTYyNCAzLjY2OTc0TDIuNjExMDQgMC43OTIzMThaIiBmaWxsPSIjMzREQjhBIi8+CiAgICAgICAgPC9zdmc+CiAgICAgICAg"
          ></img>
        </div>
      </button>
    </div>
  );
}

export default SignUp;
