import HeroSection from "./components/HeroSection";
import VideoSection from "./components/VideoSection";
import Separator from "./components/Separator";
import ProblemSection from "./components/ProblemSection";
import Transform3 from "./components/Transform3";
import Transform5 from "./components/Transform5";
import CapabilitiesSection from "./components/CapabilitiesSection";
import StatsSection from "./components/StatsSection";
import WhatsAppSection from "./components/WhatsAppSection";
import Finalcta from "./components/Finalcta";
import "./App.css";

function App() {
  return (
    <div
      className="App"
      style={{ position: "relative", overflowX: "hidden", overflowY: "auto" }}
    >
      <div className="background-gradient" />
      <HeroSection />
      <VideoSection />
      <Separator />
      <ProblemSection />
      <Separator />
      {/* <TransformSection /> */}
      {/* <Separator /> */}
      {/*<TransformSection2 /> */}
      {/* <Separator /> */}
      <Transform5 />
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
