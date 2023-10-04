import React from 'react';
import './intro.css';
import logo from "../../../assets/logo.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>We Are <span className='introName'>Name</span><br/>Jual Beli Website Lebih Mudah dari Sebelumnya!
            </span>
            <p className='introPara'>Jangan lewatkan peluang untuk membeli situs web dengan mudah dan aman.<br/> Bergabunglah dengan kami di [Nama Website] sekarang dan<br/> mulailah perjalanan Anda menuju kesuksesan digital.
</p> 
            <Link>
                <button className='btn'>
                    <img src={logo} alt='hireImg' className='btnImg'/>Hire Me
                </button>
            </Link>
        </div>
        <img src='' alt='' className='bg'/>
    </section>
  )
}

export default Intro