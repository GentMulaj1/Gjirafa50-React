import React from 'react'
import './Nav.css'

import Kompjuter from './img/hide-nav/kompjuter.jpg'
import Laptop from './img/hide-nav/laptop.jpg'
import Server from './img/hide-nav/server.jpg'
import Celular from './img/hide-nav/celular.jpg'
import GPS from './img/hide-nav/gps.jpg'
import audio from './img/hide-nav/audio.jpg'
import Aksesore from './img/hide-nav/aksesore.jpg'
import Konzola from './img/hide-nav/konzola&aksesore.jpg'
import Lojera from './img/hide-nav/lojera.jpg'
import RealitetVirtual from './img/hide-nav/realitet-virtual.jpg'
import SuvenirePerGamera from './img/hide-nav/suvenire-per-gamera.jpg'
import VideoLojera from './img/hide-nav/videolojera.jpg'
import LodraSmart from './img/hide-nav/lodra-smart&dron.jpg'
import OreMates from './img/hide-nav/ore&mates-aktiviteti.jpg'
import PajisjeShtepiake from './img/hide-nav/pajisje-shtepiake.jpg'
import Shendet from './img/hide-nav/shendet.jpg'
import SmartHome from './img/hide-nav/smart-home.jpg'
import Sport from './img/hide-nav/sport.jpg'
import Altoparlante from './img/hide-nav/altoparlante.jpg'
import DisqeTeJashtme from './img/hide-nav/disqe-te-jashtme.jpg'
import FotoVoltaik from './img/hide-nav/fotovoltaik-(pv).jpg'
import Kabllo from './img/hide-nav/kabllo.jpg'
import KartaMemorie from './img/hide-nav/karta-memorie.jpg'
import KufjeMikrofon from './img/hide-nav/kufje&mikrofon.jpg'
import Maus from './img/hide-nav/maus.jpg'
import Media from './img/hide-nav/media.jpg'
import Monitor from './img/hide-nav/monitor.jpg'
import PaisjePerZyre from './img/hide-nav/pajisje-per-zyre.jpg'
import PaisjeRrjeti from './img/hide-nav/pajisje-rrjeti.jpg'
import Pastrues from './img/hide-nav/pastrues.jpg'
import BurimeEnergjie from './img/hide-nav/burime-energjie.jpg'
import Disk from './img/hide-nav/disk.jpg'
import DriveOptike from './img/hide-nav/drive-optik.jpg'
import Ftohes from './img/hide-nav/ftohes.jpg'
import KartaZgjerimi from './img/hide-nav/karta-zgjerimi.jpg'
import KartelaGrafike from './img/hide-nav/kartela-grafike.jpg'
import Kasa from './img/hide-nav/kasa.jpg'
import MemorieOptike from './img/hide-nav/memorie-operative.jpg'
import PllakeAme from './img/hide-nav/pllake-ame.jpg'
import Procesor from './img/hide-nav/procesor.jpg'
import FotoVideo from './img/hide-nav/foto&video.jpg'
import PaisjePerAutomjete from './img/hide-nav/pajisje-per-automjete.jpg'
import TvProjektor from './img/hide-nav/tv&projektor.jpg'
import VideoPlayers from './img/hide-nav/video-players.jpg'
import Lexues from './img/hide-nav/lexues.jpg'
import Tablet from './img/hide-nav/tablet.jpg'
import Outlet from './img/hide-nav/outlet.jpg'




const Nav = () => {
  return (
    <nav>
        <div className="wrapper">
        <ul id="nav-title">
        <li className="pointer "><a href="#">Kompjuter, Laptop & Server</a>
            <div className="hide">
                <div className="full-hide">
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={Kompjuter} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Kompjuter</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">All in One (AiO)</a> <a href="#">Gaming</a> <a href="#">Gjirafa50 Builds</a> <a href="#">Klasik</a> <a href="#">Mini PC</a> </div>
                        </div>
                    </div>

                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={Laptop} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Laptop</p>
                            </div>
                            <div className="down-hide-nav"> 
                                <a href="#">2n??1</a> 
                                <a href="#">Aksesor??</a> 
                                <a href="#">Gaming</a> 
                                <a href="#">P??r biznes</a> 
                                <a href="#">P??r shkoll??</a> 
                                <a href="#">P??r sht??pi</a> 
                            </div>
                        </div>
                    </div>

                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={Server} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Server</p>
                            </div>
                            <div className="down-hide-nav"> 
                                <a href="#">Barebone</a> 
                                <a href="#">Kasa & Pjes?? lidh??se</a> 
                                <a href="#">NAS</a> 
                                <a href="#">Pjes??</a> 
                                <a href="#">Rack</a> 
                                <a href="#">Tower</a> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>

        <li className="pointer "> <a href="#">Celular, Tablet & Navigim</a>
            <div className="hide">
                <div className="full-hide">
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={Celular}/> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Celular</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">Aksesor??</a> <a href="#">Klasik</a> <a href="#">P??r t?? moshuar</a> <a href="#">T?? q??ndruesh??m</a> <a href="#">Touchscreen</a> </div>
                        </div>
                    </div>
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={GPS} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>GPS & Navigim</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">Aksesor??</a> <a href="#">P??r bi??ikleta</a> <a href="#">P??r makina</a> <a href="#">P??r moto??ikleta</a> <a href="#">P??r ture</a> </div>
                        </div>
                    </div>
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={Lexues} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Lexues e-book</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">Aksesor??</a> <a href="#">Fletore digjitale</a> <a href="#">Touch</a> </div>
                        </div>
                    </div>
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={Tablet} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Tablet</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">Aksesor??</a> <a href="#">Google Android</a> <a href="#">iPad OS</a> <a href="#">Tablet grafik</a> </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        
        <li className="pointer "> <a href="#">TV, Audio & Foto</a>
            <div className="hide">
                <div className="full-hide">
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={audio} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Audio</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">Aksesor??</a> <a href="#">Gramafon</a> <a href="#">Marr??s</a> <a href="#">P??r sht??pi</a> <a href="#">P??rforcues</a> <a href="#">Portative</a> <a href="#">Shiko m?? shum?? ???</a> </div>
                        </div>
                    </div>
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={FotoVideo}/> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Foto & Video</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">Fotoaparate</a> <a href="#">Kart?? memorie</a> <a href="#">Lente</a> <a href="#">Teleskop, Dylbi & Mikroskop</a> <a href="#">Tripod</a> <a href="#">Videokamer??</a> </div>
                        </div>
                    </div>
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={PaisjePerAutomjete} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Pajisje p??r automjete</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">Aksesor??</a> <a href="#">Altoparlant</a> <a href="#">Radio</a> <a href="#">Subwoofers</a> <a href="#">Videokamer??</a> </div>
                        </div>
                    </div>
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={TvProjektor} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>TV & Projektor</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">Marr??s sinjalesh p??r TV</a> <a href="#">Projektor & Sisteme interaktive</a> <a href="#">TV</a> </div>
                        </div>
                    </div>
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={VideoPlayers} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Video Players</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">Aksesor??</a> <a href="#">Blu Ray</a> <a href="#">CD</a> <a href="#">DVD</a> <a href="#">Multimedia</a> <a href="#">Portative</a> </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>

        <li className="pointer "> <a href="#">Gaming</a>
            <div className="hide">
                <div className="full-hide">
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={Aksesore} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Aksesor??</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">Joystick</a> <a href="#">Karrige & Tavolina</a> <a href="#">Kontroller</a> <a href="#">Kufje</a> <a href="#">Maus</a> <a href="#">P??r transmetime</a> <a href="#">Shiko m?? shum?? ???</a> </div>
                        </div>
                    </div>
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={Konzola} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Konzola & Aksesor??</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">Nintendo</a> <a href="#">PlayStation 3</a> <a href="#">PlayStation 4</a> <a href="#">PlayStation 5</a> <a href="#">Portative</a> <a href="#">Xbox ONE</a> <a href="#">Shiko m?? shum?? ???</a> </div>
                        </div>
                    </div>
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={Lojera} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Loj??ra</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">Edukative</a> <a href="#">Karta Lego</a> <a href="#">Loj??ra tavoline</a> <a href="#">Puzzle</a> <a href="#">Sete nd??rtimi</a> </div>
                        </div>
                    </div>
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={RealitetVirtual} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Realitet Virtual</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">Aksesor??</a> <a href="#">Pajisje VR</a> <a href="#">Videoloj??ra</a> </div>
                        </div>
                    </div>
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={SuvenirePerGamera} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Suvenire p??r gamera</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">En??</a> <a href="#">Figura</a> <a href="#">Lodra pelushi</a> <a href="#">Pajisje p??r shkoll??</a> <a href="#">P??r dhom??</a> <a href="#">Qilim</a> <a href="#">Shiko m?? shum?? ???</a> </div>
                        </div>
                    </div>
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={VideoLojera} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Videoloj??ra</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">P??r konzola</a> <a href="#">P??r PC</a> </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>

        <li className="pointer "> <a href="#">SMART</a>
            <div className="hide">
                <div className="full-hide">
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={LodraSmart} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Lodra smart & Dron</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">Dron</a> <a href="#">Lodra</a> </div>
                        </div>
                    </div>
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={OreMates} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Or?? & Mat??s aktiviteti</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">Mat??s aktiviteti</a> <a href="#">Or?? t?? men??ura</a> </div>
                        </div>
                    </div>
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={PajisjeShtepiake} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Pajisje sht??piake</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">Elektrik dore</a> <a href="#">Korniza digjitale</a> <a href="#">Llamba LED</a> <a href="#">Po??a elektrik</a> <a href="#">Radiomarr??se</a> <a href="#">Stacione moti</a> <a href="#">Shiko m?? shum?? ???</a> </div>
                        </div>
                    </div>
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={Shendet} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Sh??ndet</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">Higjien?? dentare</a> <a href="#">Peshore</a> <a href="#">T?? tjer??</a> </div>
                        </div>
                    </div>
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={SmartHome} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Smart Home</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">Amazon Alexa</a> <a href="#">Apple HomeKit</a> <a href="#">Filtrues ajri</a> <a href="#">Fshes?? me vakum</a> <a href="#">Google Assistant</a> <a href="#">Instalime t?? men??ura</a> <a href="#">Shiko m?? shum?? ???</a> </div>
                        </div>
                    </div>
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={Sport} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Sport</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">??ikliz??m</a> <a href="#">Go-Karts</a> <a href="#">Helmeta</a> <a href="#">Hoverboards</a> <a href="#">Kitesurfing</a> <a href="#">Skateboard elektrik</a> <a href="#">Shiko m?? shum?? ???</a> </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>

        <li className="pointer "> <a href="#">Aksesor??</a>
            <div className="hide">
                <div className="full-hide">
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={Altoparlante} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Altoparlant??</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">Aksesor??</a> <a href="#">HiFi</a> <a href="#">P??r festa</a> <a href="#">P??r PC</a> <a href="#">Portativ</a> </div>
                        </div>
                    </div>
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={DisqeTeJashtme} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Disqe t?? jashtme</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">2.5"</a> <a href="#">3.5"</a> <a href="#">Aksesor??</a> <a href="#">SSD</a> </div>
                        </div>
                    </div>
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={FotoVoltaik} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Fotovoltaik (PV)</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">Aksesor??</a> <a href="#">Panele solare</a> <a href="#">Senzor??</a> </div>
                        </div>
                    </div>
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={Kabllo} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Kabllo</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">Aksesor??</a> <a href="#">Menaxhues p??r kabllo</a> <a href="#">P??r altoparlant</a> <a href="#">P??r celular & tablet</a> <a href="#">P??r energji</a> <a href="#">P??r kompjuter & laptop</a> <a href="#">Shiko m?? shum?? ???</a> </div>
                        </div>
                    </div>
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={KartaMemorie} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Karta memorie</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">Lexues karte</a> <a href="#">Micro SD</a> <a href="#">P??r Mac</a> <a href="#">SD</a> </div>
                        </div>
                    </div>
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={KufjeMikrofon} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Kufje & Mikrofon</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">Aksesor??</a> <a href="#">D??gjuese</a> <a href="#">Gaming</a> <a href="#">Kufje</a> <a href="#">Mikrofon</a> </div>
                        </div>
                    </div>
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={Maus} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Maus</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">Aksesor??</a> <a href="#">Gaming</a> <a href="#">Me kabllo</a> <a href="#">Pa kabllo</a> <a href="#">Prezantues</a> <a href="#">Tablet grafik</a> <a href="#">Shiko m?? shum?? ???</a> </div>
                        </div>
                    </div>
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={Media} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Media</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">Kuti & Mbrojt??se</a> <a href="#">P??r Blu-Ray</a> <a href="#">P??r CD</a> <a href="#">P??r DVD</a> <a href="#">Sh??nues</a> </div>
                        </div>
                    </div>
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={Monitor} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Monitor</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">Aksesor??</a> <a href="#">Format i gjer??</a> <a href="#">Gaming</a> <a href="#">Grafik</a> <a href="#">I lakuar</a> <a href="#">P??r filma</a> <a href="#">Shiko m?? shum?? ???</a> </div>
                        </div>
                    </div>
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={PaisjePerZyre} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Pajisje p??r zyr??</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">Cop??tues letre</a> <a href="#">Kalkulator</a> <a href="#">Karrige</a> <a href="#">Plastifikues</a> <a href="#">Prer??se</a> </div>
                        </div>
                    </div>
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={PaisjeRrjeti} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Pajisje rrjeti</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">Access Point</a> <a href="#">Aksesor??</a> <a href="#">Bluetooth</a> <a href="#">Kart?? rrjeti & WiFi</a> <a href="#">Mikrotik</a> <a href="#">Modem</a> <a href="#">Shiko m?? shum?? ???</a> </div>
                        </div>
                    </div>
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={Pastrues} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Pastrues</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">Aj??r i kompresuar</a> <a href="#">Lecka</a> <a href="#">Mas?? pastrimi</a> <a href="#">Peceta</a> <a href="#">P??r CD</a> <a href="#">P??r kamera & lente</a> <a href="#">Shiko m?? shum?? ???</a> </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>

        <li className="pointer "> <a href="#">Pjes?? p??r kompjuter</a>
            <div className="hide">
                <div className="full-hide">
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={BurimeEnergjie} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Burime energjie</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">400 W</a> <a href="#">500 W</a> <a href="#">600 W</a> <a href="#">700 W</a> <a href="#">800 W</a> <a href="#">Aksesor??</a> <a href="#">Shiko m?? shum?? ???</a> </div>
                        </div>
                    </div>
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={Disk} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Disk</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">Aksesor??</a> <a href="#">P??r kompjuter</a> <a href="#">P??r laptop</a> <a href="#">P??r qendra kontrolli</a> <a href="#">T?? jasht??m</a> </div>
                        </div>
                    </div>
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={DriveOptike} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Drive optik</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">T?? brendsh??m</a> <a href="#">T?? jasht??m</a> </div>
                        </div>
                    </div>
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={Ftohes} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Ftoh??s</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">Aksesor??</a> <a href="#">Me uj??</a> <a href="#">P??r chipset</a> <a href="#">P??r disk</a> <a href="#">P??r memorie</a> <a href="#">P??r procesor</a> <a href="#">Shiko m?? shum?? ???</a> </div>
                        </div>
                    </div>
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={KartaZgjerimi} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Karta zgjerimi</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">Karta p??r TV</a> <a href="#">Karta rrjeti LAN</a> <a href="#">Karta WiFi</a> <a href="#">Karta z??ri</a> <a href="#">Kontroller</a> <a href="#">Pajisje p??r editim & regjistrim</a> </div>
                        </div>
                    </div>
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={KartelaGrafike} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Kartela grafike</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">Aksesor??</a> <a href="#">Gaming</a> <a href="#">Multimedia</a> <a href="#">Profesionale</a> </div>
                        </div>
                    </div>
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={Kasa} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Kasa</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">Aksesor??</a> <a href="#">P??r kompjuter</a> <a href="#">T?? posa??me</a> </div>
                        </div>
                    </div>
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={MemorieOptike} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Memorie operative</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">P??r kompjuter klasik</a> <a href="#">P??r laptop</a> </div>
                        </div>
                    </div>
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={PllakeAme} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Pllak?? am??</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">Aksesor??</a> <a href="#">Gaming & Multimedia</a> <a href="#">Me kart?? WiFi</a> <a href="#">Me procesor t?? integruar</a> <a href="#">P??r Gaming</a> <a href="#">P??r zyr??</a> </div>
                        </div>
                    </div>
                    <div className="hide-nav">
                        <div className="left-hide-nav"> <img src={Procesor} /> </div>
                        <div className="right-hide-nav">
                            <div className="up-hide-nav">
                                <p>Procesor</p>
                            </div>
                            <div className="down-hide-nav"> <a href="#">P??r kompjuter</a> <a href="#">P??r server & workstation</a> </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>

        <li className="pointer "> <a href="#">Outlet</a>
            <div className="hide outlet" >
                <div className="full-hide outlet"> <img src={Outlet} /> </div>
            </div>
        </li>

        <li className="pointer "> <a href="#">??ka ka t're?</a> </li>
    
    </ul>
        </div>
    </nav>





  )
}

export default Nav
