import React from 'react';
import './intro.css';
import bg from '../../../assets/hiasan.png';

const Intro = () => {
  return (
    <div className='Intro'>
      <span className='title'>Web Pembelajaran</span>
      <img src={bg} alt="bg" />
    </div>
  )
}

export default Intro