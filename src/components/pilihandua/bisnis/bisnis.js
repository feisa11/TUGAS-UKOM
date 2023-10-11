import React from 'react';
import './bisnis.css';
import bisnis1 from '../../../assets/bisnis1.png';
import bisnis2 from '../../../assets/bisnis2.png';
import bisnis3 from '../../../assets/bisnis3.png';
import bisnis4 from '../../../assets/bisnis4.jpg';
import bisnis5 from '../../../assets/bisnis5.png';


const Bisnis = () => {
  return (
    <section id='bisnis'>
        {/* <h2 className='bisnisTittle'>
            Our Portofolio
        </h2> */}
        <div className='text'>
        <span className="bussiness">
        Masih belum yakin? Cek hasil karya Web Bisnis dari Websitor!
        </span>
        <div className='bisnisDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sem diam, semper sit amet volutpat eget, venenatis sed eros. Etiam massa magna, malesuada a lorem vel, varius bibendum turpis. Maecenas ultricies ut leo vel laoreet. Sed ac maximus nibh. Cras sit amet molestie nisl, a tempor est.</div>
        </div>
        <div className='bisnisImgs'>
            <img className='bisnisimg' src={bisnis1} alt=''/>
            <img className='bisnisimg' src={bisnis2} alt=''/>
            <img className='bisnisimg' src={bisnis3} alt=''/>
            <img className='bisnisimg' src={bisnis4} alt=''/>
            <img className='bisnisimg' src={bisnis5} alt=''/>
        </div>
        {/* <button className='bisnisBtn'>Harga</button> */}
    </section>
  )
}

export default Bisnis