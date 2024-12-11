import React from 'react';

import NewRelease from "../../components/new-release/NewRelease";
import ContentSection from "../../components/content-section/ContentSection";
import arrowRightCircle from '../../assets/icons/arrowRightCircle.svg'

function HomePage() {
    const sections = [
        { title: 'African selection', type: 'Game', icon: arrowRightCircle },
        { title: 'Action', type: 'Game', icon: arrowRightCircle },
        { title: '', type: 'Comic', icon: arrowRightCircle },
        { title: 'Adventure', type: 'Game', icon: arrowRightCircle },
        { title: 'African anime', type: 'Game', icon: arrowRightCircle },
        { title: '', type: 'SmallGame', icon: arrowRightCircle },
        { title: 'Arcade', type: 'Game', icon: arrowRightCircle },
        { title: 'Simulation', type: 'Game', icon: arrowRightCircle }
    ];

    return (
        <>
            <NewRelease />
            {sections.map((section, index) => (
                <ContentSection key={index} title={section.title} icon={section.icon} type={section.type} />
            ))}
        </>
    );
}

export default HomePage;
