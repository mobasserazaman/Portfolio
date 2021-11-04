import About from "./components/About";
import Projects from "./components/Projects";
import { Contact } from "./components/Contact";
import { MyNav } from "./components/MyNav";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <MyNav />
      <div className="App" style={{ width: "84vw", marginLeft: "8vw" }}>
        <About />
        <Projects />
        <Contact />
      </div>
      <div style={{ height: "100px" }}></div>
    </React.Fragment>
  );
}

export default App;
