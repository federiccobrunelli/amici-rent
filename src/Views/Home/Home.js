import React from 'react';
import {CardsCarousel} from '../../Components/CardsCarousel/CardsCarousel';
import {ReviewsCarousel} from '../../Components/ReviewsCarousel/ReviewsCarousel';
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => (
    <div style={{
      color: 'white', 
      background: 'grey',
      padding: '15px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      transform: 'translate(-50%, -50%)'
    }}>
      {text}
    </div>
  );


export const Home = () => {
  return (
    <div className="home">
        <CardsCarousel/>

        <div className="bookings">

        </div>

        <div className="banner">Controlla la disponibilità</div>

        <div className="hero-1">
        <h1>Noleggio furgoni Roma - Formula low cost su tutti i noleggi</h1>
        <p>La nostra Ditta, AmiciRent®, ha sede a Roma. Non ha filiali in altre città. Opera con il concetto di "Noleggio Low Cost", formula di noleggio molto apprezzata dai consumatori. Questo è possibile riducendo le spese di gestione. Ciò non significa risparmire sulla sicurezza dei furgoni, anzi, i nostri furgoni sono sempre dotati di pneumatici termici e catene da neve senza costi aggiuntivi proprio per garantire il noleggio sicuro. Inoltre, tutti i furgoni hanno assistenza H24 in tutta Italia. Per rendere più agevole il lavoro dei nostri clienti, i furgoni sono dotati di carrello portapacchi, cinghie fermabagagli, kit per trasporto moto, sempre a prezzi low cost come il noleggio. Trasportare moto facile; potete portare due moto assicurandole al pianale del furgone. Inoltre verrà fornita anche una rampa in alluminio.</p>
        <button>Richiedi un preventivo</button>
        </div>
        <div className="banner">Dicono di noi</div>
        <ReviewsCarousel/>

        <div className="banner">Dove siamo</div>
        <div className='hero-2'>

            <h2>
            La nostra unica sede è a Roma,
            in via Boccea 678/n 00166 

            <br/>
            L’unica opzione possibile è quella del ritiro e consegna presso la nostra sede.
            <br/>
            Orari: dal lunedì al venerdì: 9-18
            sabato e domenica: su appuntamento
            </h2>

        <div className='mapWrapper'>
            <GoogleMapReact
            className='GoogleMapReact'
            bootstrapURLKeys={{ key: 'AIzaSyBeztCDYiwbjXMaFDdlyAQvhPGBUb2bOf4'}}
            defaultCenter={{lat: 41.9227083800822,  lng: 12.374481560123495}}
            defaultZoom={12}
            >
                <Marker
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
                />
            </GoogleMapReact>
        </div>
  


</div>
    </div>
  );
}


