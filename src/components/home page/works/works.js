import React from 'react';
import './works.css';
import orang from '../../../assets/orang.jpg';

const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTittle'>
            My Portofolio
        </h2>
        <span className='worksDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sem diam, semper sit amet volutpat eget, venenatis sed eros. Etiam massa magna, malesuada a lorem vel, varius bibendum turpis. Maecenas ultricies ut leo vel laoreet. Sed ac maximus nibh. Cras sit amet molestie nisl, a tempor est. Curabitur id tellus erat</span>
        <div className='worksImgs'>
            <img className='worksimg' src={orang} alt=''/>
            <img className='worksimg' src={orang} alt=''/>
            <img className='worksimg' src={orang} alt=''/>
            <img className='worksimg' src={orang} alt=''/>
            <img className='worksimg' src={orang} alt=''/>
            <img className='worksimg' src={orang} alt=''/>
        </div>
        <button className='worksBtn'>See more</button>
    </section>
  )
}

export default Works