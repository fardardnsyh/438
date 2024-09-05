import AIComp from "./components/AIComp";
import "./App.css";
import Hero from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero/>
        <AIComp />
    </div>
  );
}

export default App;
