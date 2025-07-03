import HeroSection from "./components/HeroSection";
import VideoSection from "./components/VideoSection";
import Separator from "./components/Separator";
import ProblemSection from "./components/ProblemSection";
import TransformSection from "./components/TransformSection";
import CapabilitiesSection from "./components/CapabilitiesSection";
import StatsSection from "./components/StatsSection";
import WhatsAppSection from "./components/WhatsAppSection";
import Finalcta from "./components/Finalcta";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ position: 'relative', overflowX: 'hidden', overflowY: 'auto' }}>
      <div className="background-gradient" />
      <HeroSection /> 
      <VideoSection />
      <Separator />
      <ProblemSection />
      <Separator />
      <TransformSection />
      <Separator />
      <CapabilitiesSection />
      <Separator />
      <StatsSection />
      <Separator />
      <WhatsAppSection />
      <Separator />
      <Finalcta />
    </div>
  );
}

export default App;
