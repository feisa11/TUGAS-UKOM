import React from "react";
import Title from "./components/pilihandua/title/title";
import Arsitektur from "./components/pilihandua/arsitektur/arsitektur";
import Kelebihan from "./components/pilihan/kelebihan/kelebihan";
import Pricing from "./components/pilihan/pricing/pricing";
import Bisnis from "./components/pilihandua/bisnis/bisnis";


const PilihanDua = () => {
  return (
        <div className="Pilihan">
          <Title />
          <Bisnis />
          <Arsitektur />
          <Kelebihan />
          <Pricing />
        </div>
      );
    };


export default PilihanDua;
