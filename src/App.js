import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./home";
import Pilihan from "./pilihan";
import PilihanDua from "./pilihandua";
import Form from "./components/pilihan/form/form";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/web/pembelajaran" element={<Pilihan />}></Route>
          <Route path="/web/arsitektur" element={<PilihanDua />}></Route>
          <Route path="/form" element={<Form />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
