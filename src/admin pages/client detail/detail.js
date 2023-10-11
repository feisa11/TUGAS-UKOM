import React from 'react';
import './detail.css';
import { Link } from "react-router-dom";

const Detail = () => {
  return (
    <div className='Detail'>
      <div className='profile'>
        <h2>information</h2>
        <p className='profiletitle'>Name : </p>
        <p className='profiledata'>Client name</p>
        <p className='profiletitle'>Company :</p>
        <p className='profiledata'>Client Company</p>
        <p className='profiletitle'>Email :</p>
        <p className='profiledata'>Client email</p>
        <p className='profiletitle'>Phone :</p>
        <p className='profiledata'>Client phone</p>
        <p className='profiletitle'>Address :</p>  
        <p className='profiledata'>Client Address</p>
      </div>
      <div className='project'>
        <div className='payment'>
          <div className='budget'>
            <p className='title'>Budget :</p>
            <p>Rp 2000K</p>
          </div>
          <div className='timeline'>
            <p className='start'>12 desc 2022</p>
            <p className='deadline'>12 desc 2022</p>
          </div>
          <div className='status'>
            <p className='title'>Budget :</p>
            <p>Status</p>
          </div>
        </div>
        <div className='overview'>
          <div className='projectdetail'>
            <p className='title'>Feature :</p>
            <input type="text" value="test value"></input>
          </div>
          <div className='projectdetail'>
            <p className='title'>Security :</p>
            <input type="text" value="test value"></input>
          </div>
          <div className='projectdetail'>
            <p className='title'>Audience :</p>
            <input type="text" value="test value"></input>
          </div>
          <div className='projectdetail'>
            <p className='title'>Inspiration :</p>
            <input type="text" value="test value"></input>
          </div>
          <div className='projectdetail'>
            <p className='title'>Expectations :</p>
            <input type="text" value="test value"></input>
          </div>
          <div className='projectdetail'>
            <p className='title'>Approval :</p>
            <input type="text" value="test value"></input>
          </div>
          <div className='projectdetail desc'>
            <p className='title'>Description :</p>
            <textarea value='test value'></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail