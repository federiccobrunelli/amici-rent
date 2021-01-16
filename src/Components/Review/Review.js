import React from 'react';
import full_star from '../../FILES/full_star.png'
import empty_star from '../../FILES/empty_star.png'


export const Review = (props) => {
  return (
    <div className="review">
        <div className='rating'>
            <img src={full_star} alt=''/>
            <img src={full_star} alt=''/>
            <img src={full_star} alt=''/>
            <img src={full_star} alt=''/>
            <img src={empty_star} alt=''/>
        </div>

        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <h3>{props.name}</h3>
    </div>
  );
}


