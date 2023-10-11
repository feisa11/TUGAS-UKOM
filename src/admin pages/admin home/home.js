import React from 'react';
import './home.css';
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div className='Home'>
        <div className='cards'>
            <div className='vipcardcontent'>
                <p className='carddesc'>Total Revenue</p>
                <h2 className='cardheader'>Rp 12.000K</h2>
            </div>
            <div className='cardcontent'>
                <p className='carddesc'>Client this month</p>
                <h2 className='cardheader'>100</h2>
            </div>
            <div className='cardcontent'>
                <p className='carddesc'>Revenue this month</p>
                <h2 className='cardheader'>Rp 12.000K</h2>
            </div>
            <div className='cardcontent'>
                <p className='carddesc'>Order this month</p>
                <h2 className='cardheader'>230</h2> 
            </div> 
        </div>
        <div className='homecontent'>
            <div className='grafik'>
                <div className='grafikcontent'>
                    <h2 className='grafiktitle'>Value</h2>
                    <div className='bar'>
                        <div className='progress'></div>
                    </div>
                </div>
                <div className='grafikcontent'>
                    <h2 className='grafiktitle'>Value</h2>
                    <div className='bar'>
                        <div className='progress'></div>
                    </div>
                </div>
                <div className='grafikcontent'>
                    <h2 className='grafiktitle'>Value</h2>
                    <div className='bar'>
                        <div className='progress2'></div>
                    </div>
                </div>
                <div className='grafikcontent'>
                    <h2 className='grafiktitle'>Value</h2>
                    <div className='bar'>
                        <div className='progress3'></div>
                    </div>
                </div>
            </div>
            <div className='data'>
                <h2>recent project</h2>
            </div>
        </div>
        <div className='homebtns'>
            <button className='homebtn'><Link to="/clientlist" className='link'>Ongoing Order</Link></button>
            <button className='homebtn'><Link to="/clienthistory" className='link'>History</Link></button>
            <button className='homebtn'><Link to="/clientmessage" className='link'>Message</Link></button>
        </div>
    </div>
  )
}

export default Home