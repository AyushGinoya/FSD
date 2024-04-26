import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Hollywood from "./components/Hollywood";
import Bollywood from "./components/Bollywood";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/home" element={<div>Home</div>} />
        <Route path="/holi" element={<Hollywood />}>
          <Route index element={<div>2023 movies</div>} />
          <Route path="/holi/2022" element={<div>2022 movies</div>} />
          <Route path="/holi/2021" element={<div>2021 movies</div>} />
          <Route path="/holi/2020" element={<div>2020 movies</div>} />
        </Route>
        <Route path="/boli" element={<Bollywood />}>
          <Route index element={<div>1023 movies</div>} />
          <Route path="/boli/1022" element={<div>1022 movies</div>} />
          <Route path="/boli/1021" element={<div>1021 movies</div>} />
          <Route path="/boli/1020" element={<div>1020 movies</div>} />
        </Route>
        <Route path="/about" element={<div>About</div>} />
      </Routes>
    </Router>
  );
}

export default App;
