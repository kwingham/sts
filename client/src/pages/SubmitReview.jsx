import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SubmitReview = () => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [review, setReview] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, country, review }),
    })
      .then((response) => response.json())
      .then(() => navigate("/"))
      .catch((error) => console.error("Submit error:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <textarea
        placeholder="Review"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SubmitReview;
