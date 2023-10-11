import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./home";
import Pilihan from "./pilihan";
import PilihanDua from "./pilihandua";
import PilihanTiga from "./pilihantiga";
import Kontak from "./components/home page/kontak/kontak";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/web/sekolah" element={<Pilihan />}></Route>
          <Route path="/web/bisnis" element={<PilihanDua />}></Route>
          <Route path="/web/custom" element={<PilihanTiga />}></Route>
          <Route path="/kontak" element={<Kontak/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
