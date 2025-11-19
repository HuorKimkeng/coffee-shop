import React from 'react';
import Home from '../components/Home';
import SignatureDrink from '../components/SignatureDrink';
import Footer from '../components/Footer';
import SpecialOffers from '../components/SpecialOffers';
import Promotions from '../components/Promotions';

function HomePage() {
   return(
      <>
         <Home />
         <SignatureDrink />
         <SpecialOffers />
         <Promotions />
         <Footer/>
      </>
   );
}

export default HomePage;