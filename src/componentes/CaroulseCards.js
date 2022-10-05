import React from 'react';
import { View } from "react-native";
import Carousel from 'react-native-snap-carousel';
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem';
import data from './../model/data2';
import {windowWidth} from './../utils/Dimensions';

const CarouselCards = () => {
    const isCarousel = React.useRef(null);

    return (
        <View>
            <Carousel
                layout="default"
                layoutCardOffset={9}
                ref={isCarousel}
                data={data}
                renderItem={CarouselCardItem}
                sliderWidth={windowWidth}
                itemWidth={300}
                loop={true}
                /* sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                inactiveSlideShift={0}
                useScrollView={true} */
            />
        </View>
    )
}


export default CarouselCards;