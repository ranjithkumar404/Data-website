import React from "react";
import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newslider from "./components/Newslider";


function App() {
  return (
    <div >
  <Navbar/>
<Hero/>
<Analytics/>
<Newslider/>
<Cards/>
<Footer/>
    </div>
  );
}

export default App;
