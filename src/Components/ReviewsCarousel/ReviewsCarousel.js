import React from 'react';
import Carousel from 'react-elastic-carousel';
import {Review} from '../../Components/Review/Review';


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 900, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

export const ReviewsCarousel = () => {
  return (
    <div className="carousel">

        <Carousel breakPoints={breakPoints}>
            <Review 
            title='title' 
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora libero dolor enim harum qui, magni totam illo sequi iure molestias.' 
            name='name'/>

            <Review 
            title='title' 
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora libero dolor enim harum qui, magni totam illo sequi iure molestias.' 
            name='name'/>

            <Review 
            title='title' 
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora libero dolor enim harum qui, magni totam illo sequi iure molestias.' 
            name='name'/>

            <Review 
            title='title' 
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora libero dolor enim harum qui, magni totam illo sequi iure molestias.' 
            name='name'/>
        </Carousel>
    </div>
  );
}


