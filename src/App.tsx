import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Step1 from "./components/Step1/Step1";
import Step2 from "./components/Step2/Step2";
import Step3 from "./components/Step3/Step3";
import About from "./components/About/About";
import Locations from "./components/Locations/Locations";
import Footer from "./components/Footer/Footer";

import { useState } from "react";
function App() {
  const [category, setCategory] = useState("Bar Picked");
  const [value, setValue] = useState("");

  const [recipeID, setRecipeID] = useState("");

  return (
    <>
      <div className="container max-w-full">
        <Navbar />
        <main>
          <Home />
          <Step1 setCategory={setCategory} setValue={setValue} />
          <Step2 category={category} value={value} setRecipe={setRecipeID} />
          <Step3 recipeID={recipeID} setRecipeID={setRecipeID} />
          <About />
          <Locations />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
