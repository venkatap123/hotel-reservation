import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import RoomContainer from '../components/RoomsContainer'

import { Link } from 'react-router-dom';

export default function Rooms() {
  return  (
  <>
  <Hero hero="roomsHero">
    <Banner title="Our Rooms" 
    subtitle="Rooms starting from $100">
      <Link to="/" className='btn-primary'>Home</Link>
    </Banner>
  </Hero>
  <RoomContainer />
  
  </>
  );
}

