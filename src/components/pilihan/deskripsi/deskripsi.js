import React from 'react';
import './deskripsi.css';

const Deskripsi = () => {
  return (
    

    <div className='deskripsiLayanan'>
      <div className="pertama">
        <div className='pengertian'>Web Arsitektur?</div>
        <p className='pengertianParagraf'>rsitektur Website adalah suatu pendekatan terhadap desain dan perencanaan situs yang, seperti arsitektur itu sendiri, melibatkan teknis, kriteria estetis dan fungsional. Seperti dalam arsitektur tradisional, fokusnya adalah benar pada pengguna dan kebutuhan pengguna. Hal ini memerlukan perhatian khusus pada konten web, rencana bisnis, kegunaan, desain interaksi, informasi dan desain arsitektur web. Untuk optimasi mesin pencari yang efektif perlu memiliki apresiasi tentang bagaimana sebuah situs Web terkait dengan World Wide Web.</p>
      </div>

      <div className="kedua">
        <div className='definisi'>Komponen Arsitektur Web</div>
        <p className='definisiParagraf'>Ada 2 komponen dasar didalam arsitektur web yaitu browser web dan server web. Browser web menawarkan antar muka grafis untuk pengguna dan bertanggung jawab untuk komunikasi dengan server webmengikuti protokol HTTP yang distandarisasi.</p>
      </div>

      <div className="kedua">
        <div className='definisi'>Web Server & Web Browser</div>
        <p className='definisiParagraf'>Web Browser adalah perangkat lunak yang berfungsi untuk menerima dan menyajikan sumber informasi dari Internet. Sebuah sumber informasi diidentifikasi dengan pengidentifikasi sumber seragam yang dapat berupa halaman web, gambar, video, atau jenis konten lainnya.</p>
        <p className='definisiParagraf'>Web server adalah sebuah software (perangkat lunak) yang memberikan layanan berupa data. Berfungsi untuk menerima permintaan HTTP atau HTTPS dari klien atau kita kenal dengan web browser (Chrome, Firefox). Selanjutnya ia akan mengirimkan respon atas permintaan tersebut kepada client dalam bentuk halaman web.</p>
      </div>
    </div>
  )
}

export default Deskripsi