import React from 'react';
import './intro.css';
import bg from '../../../assets/hiasanLayanan.png';

const Intro = () => {
  return (
    <div className='Intro'>
      <span className='title'>WEB PEMBELAJARAN</span>
      <img src={bg} className='hiasanLayanan' alt="bg" />
    </div>
  )
}

export default Intro