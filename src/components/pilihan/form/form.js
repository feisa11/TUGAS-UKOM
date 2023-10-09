import React, { useState } from 'react';
import './form.css';

export default function Form() {
  const [state, setState] = useState('');
  const handleSubmit = () => {
    alert(`Hi ${state}`);
  };
  const handleChange = (e) => {
    setState(e.target.value);
  };


  return (
    <div className='form'>
      <h1 className='formulir'>Isi Formulir</h1>
      <form className='pengisian' onSubmit={handleSubmit}>
        <label className='label'>
          Nama :
        </label> <br />
        <input className='input' type="text" value={state} onChange={handleChange} />
        <br />

        <label className='label'>
          Telp :
        </label> <br />
        <input type="text" value={state} onChange={handleChange} />
        <br />

        <label className='label'>
          Layanan :
        </label> <br />
        <input type="text" value={state} onChange={handleChange} />
        <br />

        <textarea className='label' name="" id="" cols="30" rows="10">
          Spesifikasi Website :
        </textarea>
        <br />

        <button className='send' type='submit'>Submit</button>
      </form>
    </div>
  );
}