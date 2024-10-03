import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error fetching reviews: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => setReviews(data))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <div>
      <h1>Travel Reviews</h1>
      <Link to="/submit-review">Submit a New Review</Link>
      <div>
        {reviews.map((review) => (
          <div key={review.id}>
            <h2>{review.name}</h2>
            <p>{review.country}</p>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
