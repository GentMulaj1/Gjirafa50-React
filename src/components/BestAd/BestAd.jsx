import React from 'react'
import './BestAd.css'
import bestAd from './img/bestAD.jpg'
import blejdhekurse from './img/blejdhekurse.jpg'

const BestAd = () => {
  return (
    <div className='bestAD'>
      <div className="wrapper bestAd">
        <img src={blejdhekurse} alt="" />
      <img src={bestAd} alt="" />
    </div>
  </div>
  )
}

export default BestAd
