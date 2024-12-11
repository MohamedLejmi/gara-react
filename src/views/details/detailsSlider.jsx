import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import gameImage1 from '../../assets/images/game1.png'
import gameImage2 from '../../assets/images/game2.png'

const DetailsSlider = () => {

    // Handlers for carousel events
    const onChange = (index) => {
        console.log('Slide changed to:', index);
    };

    const onClickItem = (index) => {
        console.log('Clicked item:', index);
    };

    const onClickThumb = (index) => {
        console.log('Clicked thumb:', index);
    };

    return (
        <Carousel
            showArrows={true}
            onChange={onChange}
            onClickItem={onClickItem}
            onClickThumb={onClickThumb}
        >
            <div className={'slideImageContainer'}>
                <img src={gameImage1} alt="Slide 1" />
            </div>
            <div className={'slideImageContainer'}>
                <img src={gameImage2} alt="Slide 2" />
            </div>
            <div className={'slideImageContainer'}>
                <img src={gameImage1} alt="Slide 3" />
            </div>
            <div className={'slideImageContainer'}>
                <img src={gameImage2} alt="Slide 2" />
            </div>
        </Carousel>
    );
};

export default DetailsSlider;
