import React from 'react';
import './title.css';
import bg from '../../../assets/hiasanLayanan.png';

const Title = () => {
  return (
    <div className='title'>
      <span className='titleSet'>WEB BISNIS   </span>
      <img src={bg} className='hiasanLayanan' alt="bg" />
    </div>
  )
}

export default Title;