import React from 'react';
import './skills.css';
import logo from '../../../assets/logo.png';

const Skills = () => {
  return (
    <section id='skills'>
      <span className='skillTittle'>What We Do?</span>
      <span className='skillDesc'>Kami adalah platform jual beli website yang telah terpercaya dan terbukti memberikan transaksi yang aman dengan transparansi dan integritas tinggi. Setiap situs web yang terdaftar melalui platform kami mengikuti proses verifikasi yang ketat untuk memastikan legalitas dan keaslian properti digital yang dijual.</span>        
      <div className='skillBars'>
        <div className='skillBar'>
          <img src={logo} alt='Logo1' className='skillBarImg'/>
          <div className='skillBarText'>
              <h2>Beli dan Buat</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className='skillBar'>
          <img src={logo} alt='Logo2' className='skillBarImg'/>
          <div className='skillBarText'>
              <h2>Edit</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className='skillBar'>
          <img src={logo} alt='Logo3' className='skillBarImg'/>
          <div className='skillBarText'>
              <h2>Hosting</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills