import React from 'react';
import './kontak.css';
import whatsapp from '../../../assets/whatsappp.png';
import email from '../../../assets/email.png';
import location from '../../../assets/location.png';


const Kontak = () => {
      return (
      
        <section id='kontak'>
          <h2 className='kontakTittle'>Informasi Kontak</h2>
          <div className='skillBars'>
        <div className='skillBar'>
          <img src={whatsapp} alt='Logo1' className='skillBarImg'/>
          <div className='skillBarText'>
              <h2>Telepon / WhatsApp</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className='skillBar'>
          <img src={email} alt='Logo2' className='skillBarImg'/>
          <div className='skillBarText'>
              <h2>Email</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className='skillBar'>
          <img src={location} alt='Logo3' className='skillBarImg'/>
          <div className='skillBarText'>
              <h2>Lokasi</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
      </section>
  )}


    
export default Kontak;