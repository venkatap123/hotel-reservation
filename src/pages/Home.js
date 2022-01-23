import React from 'react';
import Hero from "../components/Hero"
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';
;


export default function Home() {
  return <Hero >
    <Banner title="Luxurious Rooms" 
    subtitle="Plan your vacation with us.">
      <Link to="/rooms" className='btn-primary'>Our Rooms</Link>
    </Banner>
  </Hero>;
}
