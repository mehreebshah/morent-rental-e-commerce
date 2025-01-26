"use client";

import React, { useState } from "react";


interface Review {
  name: string;
  date: string;
  position: string;
  feedback: string;
  }

const Review = () => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      name: "Alex Stanton",
      date: "21 July 2022",
      position: "CEO at Bukalapak",
      feedback:
        "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
     
    },
    {
      name: "Skylar Dias",
      date: "20 July 2022",
      position: "CEO at Amazon",
      feedback:
        "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    
    },
  ]);

  const [newReview, setNewReview] = useState<Review>({
    name: "",
    date: new Date().toLocaleDateString(),
    position: "",
    feedback: "",
    
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddReview = () => {
    if (newReview.name && newReview.position && newReview.feedback) {
      setReviews((prev) => [newReview, ...prev]);
      setNewReview({
        name: "",
        date: new Date().toLocaleDateString(),
        position: "",
        feedback: "",
      });
    } else {
      alert("Please fill in all fields before submitting your review.");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">

      {/* Display Reviews */}
      <div>
        {reviews.map((review, index) => (
          <div key={index} className="p-4 mb-6 bg-white rounded shadow">
            <h4 className="text-lg font-bold">{review.name}</h4>
            <p className="text-sm text-gray-500">{review.position}</p>
            <p className="text-sm text-gray-500">{review.date}</p>
            <p className="mt-2 text-gray-700">{review.feedback}</p>
          </div>
        ))}
      </div>
      {/* Add Review Form */}
      <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
      <div className="mb-8 p-4 bg-gray-100 rounded shadow">
        <h3 className="text-xl font-semibold mb-4">Add Your Review</h3>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={newReview.name}
          onChange={handleInputChange}
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="text"
          name="position"
          placeholder="Your Position (e.g., CEO at Company)"
          value={newReview.position}
          onChange={handleInputChange}
          className="w-full mb-3 p-2 border rounded"
        />
        <textarea
          name="feedback"
          placeholder="Your Feedback"
          value={newReview.feedback}
          onChange={handleInputChange}
          className="w-full mb-3 p-2 border rounded"
          rows={4}
        />
        <button
          onClick={handleAddReview}
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
        >
          Submit Review
        </button>
      </div>

    </div>
  );
};

export default Review;
