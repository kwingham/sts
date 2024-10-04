import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SubmitReview from "./pages/SubmitReview";
import "./styles/App.css";
import logo from "./assets/logo.webp"; // Update the path as necessary

const App = () => {
  return (
    <div className="container">
      <header className="App-header">
        <img
          src={logo}
          className="logo-top-right"
          alt="Swap Travel Stories Logo"
        />
      </header>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<LandingPage />} />

        {/* Submit Review Route */}
        <Route path="/submit-review" element={<SubmitReview />} />
      </Routes>
    </div>
  );
};

export default App;
