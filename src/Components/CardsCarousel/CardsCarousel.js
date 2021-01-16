import React from 'react';
import {Card} from '../Card/Card';
import Carousel from 'react-elastic-carousel';


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 900, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

export const CardsCarousel = () => {
  return (
    <div className="carousel">

        <Carousel breakPoints={breakPoints} >

            <Card 
                img='https://upload.wikimedia.org/wikipedia/commons/c/c0/2017_Renault_Master_%28X62%29_SWB_van_%282018-11-22%29_01.jpg' 
                title='Reanult Master' 
                subtitle='Passo Lungo' 
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora libero dolor enim harum qui, magni totam illo sequi iure molestias.'
            />

            <Card 
                img='https://upload.wikimedia.org/wikipedia/commons/c/c0/2017_Renault_Master_%28X62%29_SWB_van_%282018-11-22%29_01.jpg' 
                title='Reanult Master' 
                subtitle='Passo Lungo' 
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora libero dolor enim harum qui, magni totam illo sequi iure molestias.'
            />

            <Card 
                img='https://upload.wikimedia.org/wikipedia/commons/c/c0/2017_Renault_Master_%28X62%29_SWB_van_%282018-11-22%29_01.jpg' 
                title='Reanult Master' 
                subtitle='Passo Lungo' 
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora libero dolor enim harum qui, magni totam illo sequi iure molestias.'
            />

            <Card 
                img='https://upload.wikimedia.org/wikipedia/commons/c/c0/2017_Renault_Master_%28X62%29_SWB_van_%282018-11-22%29_01.jpg' 
                title='Reanult Master' 
                subtitle='Passo Lungo' 
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora libero dolor enim harum qui, magni totam illo sequi iure molestias.'
            />

        </Carousel>
    </div>
  );
}


