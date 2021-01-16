import React from 'react';

export const Card = (props) => {
  return (
    <div className="card">
        <img src={props.img} alt={props.title}/>
        <div className='cardTextWrapper'>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <p>{props.description}</p>
        </div>
        <div className='cardButtonWrapper'>
            <button onClick={e =>  window.location.href='/VanPage'}>Prenota</button>
        </div>
        
    </div>
  );
}


