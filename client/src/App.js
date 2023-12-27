import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
// import NewVideo from "./screens/NewVideo";

function App() {
  return (
    <>
      <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              {/* <Route exact path="/NewVideo" element={<NewVideo />} /> */}
            </Routes>
        </Router>
    </>
  );
}

export default App;
