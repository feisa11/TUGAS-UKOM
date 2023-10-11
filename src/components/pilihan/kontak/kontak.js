import React, { useState } from 'react';
import './kontak.css';

export default function Kontak() {
  const [state, setState] = useState('');
  const handleSubmit = () => {
    alert(`Hi ${state}`);
  };
  const handleChange = (e) => {
    setState(e.target.value);
  };


  return (
    <section id='kontak' className='promosi'>

      <div className='november'>
      <h1 className='diskon'>Menyambut bulan November, <span className='discount'> dapatkan <br /> discount hingga 50%</span> untuk <span className='pelanggan'>15 pelanggan</span> pertama</h1>
      <p className='bergabung'>Jika anda sudah siap bergabung dengan komunitas website dan melakukan pemasaran dengan bisinis online. Segera isi formulir di bawah ini.</p>
      </div>
      
    <div className='row'>
      <form className='pengisian' onSubmit={handleSubmit}>
        <label className='label'>
          Nama :
        </label> <br />
        <input className='input' id='nama' type="text" placeholder='Masukan nama lengkap anda' value={state} onChange={handleChange} />
        <br />

        <label className='label'>
          Alamat Email :
        </label> <br />
        <input className='input' type="email" placeholder='Masukan nama email anda' value={state} onChange={handleChange} />
        <br />

        <label className='label'>
          Nomor WhatsApp :
        </label> <br />
        <input type="text" placeholder='Masukan nomor whatsapp anda' value={state} onChange={handleChange} />
        <br />

        <label className='label'>
          Nama Perusahan :
        </label> <br />
        <input type="text" placeholder='Nama perusahan anda' value={state} onChange={handleChange} />
      </form>
    </div>

    <div className='pesan'>
        <textarea className='pesan' cols="110" rows="10">
          Message :
        </textarea>
      </div>

      <button className='send' type='submit'>Submit</button>
    </section>
  );
}



// const Kontak = () => {
//       return (
      
//         <section id='kontak'>
//           <h2 className='kontakTittle'>Hubungi Kami</h2>
//           <div className='skillBars'>
//         <div className='skillBar'>
//           <img src={whatsapp} alt='Logo1' className='skillBarImg'/>
//           <div className='skillBarText'>
//               <h2>Telepon / WhatsApp</h2>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </div>
//         </div>

//         <div className='skillBar'>
//           <img src={email} alt='Logo2' className='skillBarImg'/>
//           <div className='skillBarText'>
//               <h2>Email</h2>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </div>
//         </div>

//         <div className='skillBar'>
//           <img src={location} alt='Logo3' className='skillBarImg'/>
//           <div className='skillBarText'>
//               <h2>Lokasi</h2>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </div>
//         </div>
//       </div>
//       </section>
//   )}
// export default Kontak;