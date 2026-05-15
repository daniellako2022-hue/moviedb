import { useState } from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import DisplayRow from "./Components/DisplayRow/DisplayRow";
import SlideShow from "./Components/SlideShow/SlideShow";
import Footer from "./Utility/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <DisplayRow />
      <Footer />
    </>
  );
}

export default App;
