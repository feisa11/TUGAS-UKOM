import React from 'react';
import Intro from './intro/intro';
import Deskripsi from './deskripsi/deskripsi';
import Kelebihan from './kelebihan/kelebihan';
import Pricing from './pricing/pricing';

const Pilihan = () => {
  return (
    <div className='Pilihan'>
      <Intro/>
      <Deskripsi/>
      <Kelebihan/>
      <Pricing/>
    </div>
  )
}

export default Pilihan