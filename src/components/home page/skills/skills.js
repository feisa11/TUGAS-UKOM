import React from 'react';
import './skills.css';
import logo from '../../../assets/logo.png';
import cart from '../../../assets/cart icon.png';
import pencil from '../../../assets/pencil icon.png';
import house from '../../../assets/house icon.png';

const Skills = () => {
  return (
    <section id='skills'>
      <span className='skillTittle'>Mengapa memilih Platform Websitor?</span>
      <p className='skillDesc'>Jadikan Websitor tujuan Anda! Kami akan berkomitmen dan memberikan hasil terbaik untuk Anda!</p>        
      <div className='skillBarsss'>
        <div className='skillBar'>
          <img src={cart} alt='Logo1' className='skillBarImg'/>
          <div className='skillBarText'>
              <h2>Desain yang Menarik</h2>
              <p>Anda akan mendapatkan website dengan tampilan visual yang menarik dan estetis.  Yang mampu tingkatkan kesan positif pada pengunjung website Anda!</p>
          </div>
        </div>

        <div className='skillBar'>
          <img src={pencil} alt='Logo2' className='skillBarImg'/>
          <div className='skillBarText'>
              <h2>Responsif dan Mobil-Friendly</h2>
              <p>Dapatkan website responsif yang akan menyesuaikan diri dengan perangkat yang digunakan pengunjung webite Anda!</p>
          </div>
        </div>

        <div className='skillBar'>
          <img src={house} alt='Logo3' className='skillBarImg'/>
          <div className='skillBarText'>
              <h2>Informasi Kontak yang Jelas</h2>
              <p>Website dengan informasi kontak yang jelas daan mudah diakses akan memudahkan pengunjung untuk melakukan transaksi pada website Anda!</p>
          </div>
        </div>
        
        {/* <div className='skillBar'>
          <img src={house} alt='Logo3' className='skillBarImg'/>
          <div className='skillBarText'>
              <h2>Informasi Kontak yang Jelas</h2>
              <p>Website dengan informasi kontak yang jelas daan mudah diakses akan memudahkan pengunjung untuk melakukan transaksi pada website Anda!</p>
          </div>
        </div> */}
      </div>
      
      <div className='skillBarsss'>
        <div className='skillBar'>
          <img src={cart} alt='Logo1' className='skillBarImg'/>
          <div className='skillBarText'>
              <h2>Konten yang Relevan </h2>
              <p>Pembuatan website di Websitor akan disesuaikan dengan konten yang relevan dengan Website yang Anda butuhkan!</p>
          </div>
        </div>

        <div className='skillBar'>
          <img src={pencil} alt='Logo2' className='skillBarImg'/>
          <div className='skillBarText'>
              <h2>Fitur Pencarian yang Efektif </h2>
              <p>Website yang akan dapatkan di Websitor akan dikaitkan dengan pencarian efektif.</p>
          </div>
        </div>

        <div className='skillBar'>
          <img src={house} alt='Logo3' className='skillBarImg'/>
          <div className='skillBarText'>
              <h2>Navigasi yang Mudah Dipahami</h2>
              <p>Penggunaan navigasi yang easy untuk digunakan dan dipahami pengunjung website Anda!</p>
          </div>
        </div>
        
        {/* <div className='skillBar'>
          <img src={house} alt='Logo3' className='skillBarImg'/>
          <div className='skillBarText'>
              <h2>Informasi Kontak yang Jelas</h2>
              <p>Website dengan informasi kontak yang jelas daan mudah diakses akan memudahkan pengunjung untuk melakukan transaksi pada website Anda!</p>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Skills