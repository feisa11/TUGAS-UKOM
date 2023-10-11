import React from 'react';
import './judull.css';
import bg from '../../../assets/hiasanLayanan.png';

const Judull = () => {
  return (
    <div className='judull'>
      <span className='judullSet'>WEB CUSTOM</span>
      <img src={bg} className='hiasanLayanan' alt="bg" />
    </div>
  )
}

export default Judull;