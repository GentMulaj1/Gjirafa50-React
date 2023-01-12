import React, { useEffect, useState } from 'react'
import './ImageSlider.css'
import imageSlide from './data'

const ImageSlider = () => {

  const [currentState, setCurrentState] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() =>{
      if(currentState === 8) {
        setCurrentState(0)
      } else {
        setCurrentState(currentState + 1)
      }
      
    }, 5000)
    return () => clearTimeout(timer)
  }, [currentState])

  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentState].url})`, 
    backgroundSize: 'contain' 
  
  } 

  return (
    <div className='countiner-style'>
      <div style={bgImageStyle}></div>
    </div>
  )
}

export default ImageSlider
