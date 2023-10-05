import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Pilihan from "./components/pilihan/pilihan";
import Arsitektur from "./components/arsitektur/arsitektur";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/pembelajaran" element={< Pilihan />}></Route>
          <Route path="/arsitektur" element={< Arsitektur />}></Route>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
