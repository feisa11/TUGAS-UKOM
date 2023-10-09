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
            <span className="slogan">Jual Beli Website Lebih Mudah dari Sebelumnya!</span> 
            <p className='introPara'>Jangan lewatkan peluang untuk membeli situs web dengan mudah dan aman.<br/> Bergabunglah dengan kami di Websitor sekarang dan mulailah perjalanan Anda <br /> menuju kesuksesan digital.
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