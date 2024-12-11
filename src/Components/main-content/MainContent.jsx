import React, {useState} from 'react';
import styles from './MainContent.module.css';
import Header from "../../layout/header/Header";
import Sidebar from "../../layout/sidebar/Sidebar";
import HomePage from "../../views/home/HomePage";
import {Route, Routes} from "react-router-dom";
import Games from "../../views/games/gamesPage";
import Comics from "../../views/comics/comicsPage";
import AnimationsPage from "../../views/animations/AnimationsPage";
import DetailsPage from "../../views/details/DetailsPage";

function MainContent() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
  return (
      <div className={styles.homepageLaptop}>
        <Header toggleSidebar={toggleSidebar} />
        <div className={styles.mainContainer}>
          <div className={styles.contentWrapper}>
              <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
              <main className={styles.mainContent}>
                  <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/games" element={<Games />} />
                      <Route path="/comics" element={<Comics />} />
                      <Route path="/animation" element={<AnimationsPage />} />
                      <Route path="/details" element={<DetailsPage />} />
                  </Routes>
              </main>
          </div>
        </div>
      </div>
  );
}

export default MainContent;
