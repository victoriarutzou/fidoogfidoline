import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Booking from "./pages/Booking";
import Forside from './pages/Forside';
import Omos from "./pages/Omos";
import Prisliste from "./pages/Prisliste";
import Services from "./pages/Services";
import AdminSide from './pages/admin/AdminSide';
import OpdateringsSide from './pages/admin/OpdateringsSide';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Forside/>}/>
        <Route path="/prisliste" element={<Prisliste/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/omos" element={<Omos/>}/>
        <Route path="/admin" element={<AdminSide/>}/>
        <Route path="/admin/post/:postId" element={<OpdateringsSide/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
