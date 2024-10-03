import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SubmitReview from "./pages/SubmitReview";
import "./styles/App.css";

const App = () => {
  return (
    <div className="container">
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
