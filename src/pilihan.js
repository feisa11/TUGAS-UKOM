import React from "react";
import Judul from "./components/pilihan/judul/judul";
import Pembelajaran from "./components/pilihan/pembelajaran/pembelajaran";
import Kelebihan from "./components/pilihan/kelebihan/kelebihan";
import Pricing from "./components/pilihan/pricing/pricing";

const Pilihan = () => {
  return (
        <div className="Pilihan">
          <Judul />
          <Pembelajaran />
          <Kelebihan />
          <Pricing />
        </div>
      );
    };


export default Pilihan;
