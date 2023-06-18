import Benefits from "./components/Benefits";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import SignUp from "./components/SignUp";
import "./theme/typography.css";
function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <Logos />
      <Benefits />
      <SignUp />
    </div>
  );
}

export default App;
