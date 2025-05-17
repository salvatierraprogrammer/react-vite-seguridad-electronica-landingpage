import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import Services from "./components/sections/Services";
import Gallery from "./components/sections/Gallery";
import Contact from "./components/sections/Contact";
import { CssBaseline } from "@mui/material";
import './App.css'
import FloatingWhatsApp from "./components/FloatingWhatsApp ";
function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <HeroSection id="inicio" />
      <Services id="servicios" />
      <Gallery id="galeria" />
      <Contact id="contacto" />
      <FloatingWhatsApp />
      <Footer/>
    </>
  );
}

export default App;