import React from 'react';
import './works.css';
import bisnis1 from '../../../assets/bisnis3.png';
import sekolah1 from '../../../assets/sekolah33.jpg';
import bisnis3 from '../../../assets/bisnis1.png';
import sekolah3 from '../../../assets/sekolah1.jpg';
import bisnis5 from '../../../assets/bisnis2.png';

const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTittle'>
           Our Portofolio
        </h2>
        <span className='worksDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sem diam, semper sit amet volutpat eget, venenatis sed eros. Etiam massa magna, malesuada a lorem vel, varius bibendum turpis. Maecenas ultricies ut leo vel laoreet. Sed ac maximus nibh. Cras sit amet molestie nisl, a tempor est. Curabitur id tellus erat</span>
        <div className='worksImgs'>
            <img className='worksimg' src={bisnis1} alt=''/>
            <img className='worksimg' src={sekolah1} alt=''/>
            <img className='worksimg' src={bisnis3} alt=''/>
            <img className='worksimg' src={sekolah3} alt=''/>
            <img className='worksimg' src={bisnis5} alt=''/>
        </div>
        {/* <button className='worksBtn'></button> */}
    </section>
  )
}

export default Works