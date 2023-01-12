import './App.css'
import Header from "./components/Header/Header";
import ImageSlider from './components/ImageSlider/ImageSlider';
import BestAd from './components/BestAd/BestAd';
import PartnerCompany from './components/PartnerCompany/PartnerCompany';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

import { Routes, } from 'react-router-dom';
import Kompjuter from './components/pages/Kompjuter';


function App() {
  return (
    <div className='App'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />

        <Header/>
        <ImageSlider/>
        <BestAd/>
        <Main />
        <PartnerCompany/>
        <Footer/>

        {/* <Kompjuter/> */}

    </div>
  );
}

export default App;
