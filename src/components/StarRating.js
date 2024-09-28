import React, { useState } from "react";
import "./index.css";

// When the state changes, it will re-render and update the star color based on the condition.

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hoverRating, setHoverRating] = useState(null);

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((ratingValue, ind) => {
        return (
          <React.Fragment key={ind}>
            <span
              onClick={() => setRating(ratingValue)} // on click set the rating value
              onMouseEnter={() => setHoverRating(ratingValue)} // on mouse enter set the hover Rating
              onMouseLeave={(v) => setHoverRating(null)} // on mouse enter reset the hover Rating
              style={{
                color: ratingValue <= (hoverRating || rating) ? "gold" : "#F0F0F0",
              }}
            >
              ★ {/* we can also use star code &#9733;*/}
            </span>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StarRating;
