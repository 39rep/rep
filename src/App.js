import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutme" element={<AboutMe />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
