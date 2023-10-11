import React from 'react';
import './custom.css';
import portofolio1 from '../../../assets/portofolio1.png';
import portofolio2 from '../../../assets/portofolio2.jpg';
import portofolio3 from '../../../assets/portofolio3.jpg';
import portofolio4 from '../../../assets/portofolio4.png';
import portofolio5 from '../../../assets/portofolio5.jpg';



const Custom = () => {
  return (
    <section id='custom'>
        {/* <h2 className='bisnisTittle'>
            Our Portofolio
        </h2> */}
        <div className='text'>
        <span className="bussiness">
        Bebas Pilih Website Sesuai Dengan Kebutuhanmu!
        </span>
        <div className='bisnisDesc'>Tentukan website yang anda butuhkan dan segera isi formulir dengan tambahan diskon 50% untuk menyambut bulan November penuh kejutan.</div>
        </div>
        <div className='bisnisImgs'>
            <img className='bisnisimg' src={portofolio1} alt=''/>
            <img className='bisnisimg' src={portofolio2} alt=''/>
            <img className='bisnisimg' src={portofolio3} alt=''/>
            <img className='bisnisimg' src={portofolio4} alt=''/>
            <img className='bisnisimg' src={portofolio5} alt=''/>
        </div>
        <div className='option'>
          <div className='pembeli'>Mulai dari <span className='portofolio'>Website Portofolio,</span> <span className='organisasi'>Website Organisasi,</span> <br /> <span className='lainnya'>hingga website menarik lainnya.</span> </div>
        </div>
    </section>
  )
}

export default Custom;