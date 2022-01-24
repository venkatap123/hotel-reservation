import React from 'react';
import Hero from '../components/Hero';

import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

export default function Error() {
  return <Hero >
    <Banner title="Page not found" 
    subtitle="404. That's an error">
      <Link to="/" className='btn-primary'>Return Home</Link>
    </Banner>
  </Hero>;
}
