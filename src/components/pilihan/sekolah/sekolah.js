import React from "react";
import "./sekolah.css";
import sekolah1 from '../../../assets/sekolah1.jpg';
import sekolah2 from '../../../assets/sekolah2.jpg';
import sekolah3 from '../../../assets/sekolah33.jpg';
import sekolah4 from '../../../assets/sekolah4.jpg';
import sekolah5 from '../../../assets/sekolah5.jpg';

const Sekolah = () => {
  return (
    <section id="sekolah">
      <div className="teks">
      {/* <h2 className="sekolahTittle">Our Portfolio</h2> */}
      <span className="school">
        Masih belum yakin? Cek hasil karya Web Sekolah dari Websitor!
      </span>
      <div className="sekolahDesc">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sem diam, semper sit amet volutpat eget, venenatis sed eros. Etiam massa magna, malesuada a lorem vel, varius bibendum turpis. Maecenas ultricies ut leo vel laoreet. Sed ac maximus nibh. Cras sit amet molestie nisl, a tempor est. Curabitur id tellus erat
      </div>
      </div>
      <div className="sekolahImgs">
        <img className="sekolahimg" src={sekolah1} alt="" />
        <img className="sekolahimg" src={sekolah2} alt="" />
        <img className="sekolahimg" src={sekolah3} alt="" />
        <img className="sekolahimg" src={sekolah4} alt="" />
        <img className="sekolahimg" src={sekolah5} alt="" />
      </div>
      {/* <button className="sekolahBtn">Harga</button> */}
    </section>
  );
};

export default Sekolah;
