import React from 'react';
import './Hero.css';
import Donwbutton from '../includes/donwbutton';
function Hero() {
    return ( <>
    <div className='hero'>
     <h1 className='main'>Beautiful Landing Page <br />Design for You</h1>
     <p className="mainText">A good design is not only aesthetically pleasing, but also <br />functional. It should be able to solve the problem </p>
        <Donwbutton />
     </div>
    </> );
}

export default Hero;