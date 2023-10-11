import React from 'react';
import './pricing.css';
import { Link as Linkurl } from "react-router-dom";

const Pricing = () => {
      return (
      
        <section className='section'>
          <span className='titlePricing'>Pricing</span>
          <br />
          <div className='aturPricing'>
            
            <div className="paket">
            <h2 className='titlePaket'>Paket 1 & Harga</h2>
              <ul>
                <h3>Responsive Design</h3>
                <h3>Color Customization</h3>
                <h3>HTML5 & CSS3</h3>
                <h3>Styled elements</h3>
                  <h3>$199</h3>
                  <span>per month</span>
              </ul>

              <Linkurl activeClass='active' to="/kontak">
              <button className='join'>Beli</button>
            </Linkurl>
            
          </div>
            

            <div className="paket">
            <h2 className='titlePaket'>Paket 2 & Harga</h2>
              <ul>
                <h3>Responsive Design</h3>
                <h3>Color Customization</h3>
                <h3>HTML5 & CSS3</h3>
                <h3>Styled elements</h3>
                  <h3>$199</h3>
                  <span>per month</span>
              </ul>

              <Linkurl activeClass='active' to="/kontak">
              <button className='join'>Beli</button>
            </Linkurl>

            </div>
            
            <div className="paket">
              <ul>
              <h2 className='titlePaket'>Paket 3 & Harga</h2>
                <h3>Responsive Design</h3>
                <h3>Color Customization</h3>
                <h3>HTML5 & CSS3</h3>
                <h3>Styled elements</h3>
                <h3>$199</h3>
                <span>per month</span>
              </ul>

            <Linkurl activeClass='active' to="/kontak">
              <button className='join'>Beli</button>
            </Linkurl>
          </div>

        </div>
      </section>
  )}

    
export default Pricing;