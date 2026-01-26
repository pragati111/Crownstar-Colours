import './App.css';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Plans from './components/Plans/Plans';
import Testimonials from './components/Testimonials/Testimonials';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';
import VMV from './components/VMV/VMV';
import LabEquipments from './components/LabEquipments/LabEquipments';
import ProductRangeExtended from './components/ProductRangeExtended/ProductRangeExtended';
import GlowSection from './components/GlowSection/GlowSection';
import RotatingCards from './components/RotatingCards/RotatingCards';
function App() {
  return (
    <div className="App">
      <Hero />  
      <VMV/>
      <GlowSection/>
      <Programs/>
      <ProductRangeExtended/>
      <LabEquipments/>
      <Reasons/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
