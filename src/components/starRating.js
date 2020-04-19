import React from "react";
import StarRating from "react-star-rating";

function Rating () {
    return (
      <form action="/api" method="POST">
        <StarRating
          name="airbnb-rating"
          caption="Rate your stay!"
          ratingAmount={5}
        />
        <button type="submit" className="btn btn-submit">
          Submit Rating
        </button>
      </form>
    );
  }

export default Rating;