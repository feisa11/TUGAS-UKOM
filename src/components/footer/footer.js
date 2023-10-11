import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <div id='footer'>
         <div className='one'>
            <div className="perusahaan">PT Websitor</div>
            <div className='alamat'>
              <p>Jl. Jenggolo No.2 A, Bedrek, Siwalanpanji, Kec. Buduran, <br /> Kabupaten Sidoarjo, Jawa Timur 61219  <br /> Indonesia</p>
            </div>
         </div>

         <div className='one'>
            <div className="perusahaan">Contact</div>
            <div className='alamat'>
              <p>0812-3456-7899</p>
              <p>0812-3456-7899</p>
              <p>0812-3456-7899</p>
              <p>websitor@gmail.com</p>
            </div>
         </div>
    </div>
  )
}

export default Footer;