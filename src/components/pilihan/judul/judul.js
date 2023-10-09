import React from 'react';
import './judul.css';
import bg from '../../../assets/hiasanLayanan.png';

const Judul = () => {
  return (
    <div className='judul'>
      <span className='judulSet'>WEB PEMBELAJARAN</span>
      <img src={bg} className='hiasanLayanan' alt="bg" />
    </div>
  )
}

export default Judul;