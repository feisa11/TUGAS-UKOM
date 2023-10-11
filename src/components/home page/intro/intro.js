import React from 'react';
import './intro.css';
// import logo from "../../../assets/logo.png";
import hiasan from "../../../assets/hiasan_baruu.png";
// import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>We Are <span className='introName'>Websitor</span></span>
            <span className="slogan">Jasa Pembuatan Website <br />  yang Anda Cari!</span> 
            <p className='introPara'>Jangan lewatkan peluang untuk membeli situs web dengan mudah dan aman. Bergabunglah dengan kami <br /> di Websitor sekarang dan mulailah perjalanan Anda menuju kesuksesan digital.
            </p> 
            {/* <Link>
                <button className='btn'>
                    <img src={logo} alt='hireImg' className='btnImg'/>Hire Me
                </button>
            </Link> */}
        </div>
        <div className='garisBatas'></div>
        <img src={hiasan} alt="Profile" className="hiasan" />
    </section>
  )
}

export default Intro