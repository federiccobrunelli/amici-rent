import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Card} from '../../Components/Card/Card'


export const VanPage = () => {
  return (
    <div className="van-page">
        <div className="banner no-margin">"Nome del Van"</div>
        <div className="container">
            <Card
                title='Bugatti'
                subtitle='Veyron'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora libero dolor enim harum qui, magni totam illo sequi iure molestias.'
            />
            <div className="booking">
                <a className="banner no-margin" href='/'>Richiedi disponibilità</a>
            </div>
        </div>


        <div className="banner">Le nostre formule</div>
            <div className="options-container container">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora libero dolor enim harum qui, magni totam illo sequi iure molestias.
    </p>
            <div className='container'>
                <div className="options-square"></div>
                <div className="options-square"></div>
                <div className="options-square"></div>
            </div>
        </div>


        <div className="banner">Dove ritirarlo</div>
            <div className="pick-up-container container">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora libero dolor enim harum qui, magni totam illo sequi iure molestias.
</p>
                <div className='mapWrapper van-page-map'>
                    <GoogleMapReact
                    className='GoogleMapReact'
                    bootstrapURLKeys={{ key: 'AIzaSyBeztCDYiwbjXMaFDdlyAQvhPGBUb2bOf4'}}
                    defaultCenter={{lat: 41.9227083800822,  lng: 12.374481560123495}}
                    defaultZoom={12}
                />
            </div>
        </div>
    </div>
  );
}


