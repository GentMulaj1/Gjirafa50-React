import React from 'react'
import './PartnerCompany.css'
import apple from './img/1.png'
import samsung from './img/2.png'
import msi from './img/3.png'
import steelseries from './img/4.png'
import lenovo from './img/5.png'
import zowie from './img/6.png'


const PartnerCompany = () => {
  return (
    <div className='PartnerCompany'>
      <div className="wrapper partner">
        <img src={apple} alt="" />
        <span>x</span>
        <img src={samsung} alt="" />
        <span>x</span>
        <img src={msi} alt="" />
        <span>x</span>
        <img src={steelseries} alt="" />
        <span>x</span>
        <img src={lenovo} alt="" />
        <span>x</span>
        <img src={zowie} alt="" />
      </div>
    </div>
  )
}

export default PartnerCompany