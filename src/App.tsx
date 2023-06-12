import Benefits from "./components/Benefits";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./theme/typography.css";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Benefits />
      <div className="h-[512px]">Features</div>
    </>
  );
}

export default App;
