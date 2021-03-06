import React, { Fragment } from 'react';

import About from '../components/about';
import BackgroundImage from '../components/backgroundImage';
import Biographies from '../components/biographies';
import Divider from '../components/divider';
import Footer from '../components/footer';
import Header from '../components/header';
import Newsletter from '../components/newsletter';
import Testimonials from '../components/testimonials';

const Home = () => {
  return (
    <Fragment>
      <Newsletter />
      <Header />
      <Divider />
      <About />
      <BackgroundImage />
      <Biographies />
      <BackgroundImage />
      <Testimonials />
      <Divider />
      <Footer />
    </Fragment>
  )
}

export default Home
