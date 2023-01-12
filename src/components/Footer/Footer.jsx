import React from 'react'
import './Footer.css'
import Logo from './img/logo.svg'
import Facebook from './img/fb_ico.png'
import Twitter from './img/twitter_ico.png'
import Instagram from './img/insta_ico.png'
import Payments from './img/payments_all.png'
import gjirafa from './img/gjirafa.png'
import gjirafa50 from './img/gjirafa50.png'
import gjirafamall from './img/gjirafamall.png'
import gjirafajoy from './img/joy.png'
import gjirafavideo from './img/gjirafavideo.png'
import gjirafapikbiz from './img/gjirafapikbiz.png'
import gjirafaadnetwork from './img/gjirafaadnetwork.png'
import gjirafalab from './img/gjirafalab.png'


const Footer = () => {
  return (
    <div className='Footer' >
        <div className="wrapper footer1">
            <div className="left-f1">
                <img src={Logo} alt="" />    
            </div>

            <div className="right-f1">
                <div>
                    <div>
                        <span><a href="#">Llogaria</a></span>
                    </div>
                    <span><a href="#">Kyçu</a></span>
                    <span><a href="#">Regjistrohu</a></span>
                    <span><a href="#">Keni harruar fjalëkalimin?</a></span>
                </div>

                <div>
                    <div>
                        <span><a href="#">Kujdesi ndaj klientëve</a></span>
                    </div>
                    <span><a href="#">Për Gjirafa 50</a></span>
                    <span><a href="#">Pagesat</a></span>
                    <span><a href="#">Çështje teknike</a></span>
                    <span><a href="#">Transporti</a></span>
                    <span><a href="#">Produktet/porositë</a></span>
                    <span><a href="#">GjirafaFLEX</a></span>
                </div>

                <div>
                    <div>
                        <span><a href="#">Kontakt</a></span>
                    </div>
                    <span><a href="#">Kosovë: +383 38 616 161</a></span>
                    <span><a href="#">contact@gjirafa50.com</a></span>
                    <span><a href="#">Magjistralja Prishtinë-Ferizaj Kilometri i 6 (Lapnasellë) Prishtinë, Kosovë</a></span>
                    <span><a href="#">Për kërkesa të ofertave ju lutemi drejtohuni në: b2b@gjirafa50.com</a></span>

                </div>
            </div>
        </div>

        <div className="wrapper footer2">
            <div className='left-f2'>
                <span>Pagesat bëhen përmes:</span>
                <a href="#"><img src={Payments} alt="" /></a>
            </div>

            <div className='right-f2'>
                <span>Rri i lidhur me Gjirafa50:</span>
                <div>
                    <a href="#"><img src={Facebook} alt="" /></a>
                    <a href="#"><img src={Twitter} alt="" /></a>
                    <a href="#"><img src={Instagram} alt="" /></a>
                </div>
            </div>
        </div>

        <div className="wrapper footer3">
            <div className="up-f3">
                <span>Mundësuar nga <a href="#">Gjirafa, Inc.</a> - Të gjitha të drejtat e rezervuara</span>
            </div>
            <div className="down-f3">
                <a href="#">Termet dhe kushtet</a>
                <a href="#">Politika e Privatësisë</a>
            </div>
        </div>

        <div className="wrapper footer4">
            <img src={gjirafa} alt="" />
            <img src={gjirafa50} alt="" />
            <img src={gjirafamall} alt="" />
            <img src={gjirafajoy} alt="" />
            <img src={gjirafavideo} alt="" />
            <img src={gjirafapikbiz} alt="" />
            <img src={gjirafaadnetwork} alt="" />
            <img src={gjirafalab} alt="" />
        </div>
    </div>
  )
}

export default Footer
