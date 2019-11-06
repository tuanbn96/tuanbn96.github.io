import React from 'react';
import Navb from '../components/Nav';
import Banner from '../components/Banner';
import Service from '../components/Service';
import Introduce from '../components/Introduce';
import Feedback from '../components/Feedback';
import EnterYourMail from '../components/EnterYourMail';
import Footer from '../components/Footer';

import '../style/App.css';

function Home() {
  return (
    <div>
     <Navb />
     <Banner />
     <Service />
     <Introduce />
     <Feedback />
     <EnterYourMail />
    <Footer />
    </div>
  );
}

export default Home;
