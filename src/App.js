import "@animxyz/core";
import Header from "./Header.jsx";
import { XyzTransition } from "@animxyz/react";
import "./style.css";
import Body from "./Body.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <XyzTransition appear duration="auto">
      <div className="page-wrap">
        <Header />
        <Body />
        <Footer />
      </div>
    </XyzTransition>
  );
}

export default App;
