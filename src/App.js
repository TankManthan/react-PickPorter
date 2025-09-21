import './App.css';
import Clients from './component/Clients';
import HeroSection from './component/HeroSection';
import KeyFeature from './component/KeyFeature';
import Navbar from './component/Navbar';
import Network from './component/Network';
import TransformCities from './component/TransformCities';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Clients />
      <KeyFeature />
      <Network />
      <TransformCities />
    </>
  );
}

export default App;
