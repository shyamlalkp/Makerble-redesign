import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import StoryCard from "../Components/StoryCard";
import { validateStory } from "../Components/Validation";

const HomePage: React.FC = () => {
  const [story, setStory] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const validationError = validateStory(story);
    if (validationError) {
      setError(validationError);
    } else {
      alert("Story added successfully!");
      setStory("");
      setError("");
    }
  };

  return (
    <div className="w-7xl flex flex-col md:flex-row p-4 border rounded">
      {/* Sidebar */}
      <Sidebar />

      <div className="w-screen mx-4 md:flex-row bg-slate-100 justify-between items-center p-4 border rounded">
        <h2 className="text-xl w-96 font-bold mb-4">Newsfeed</h2>
        <div className="mb-4">
          <textarea
            className="w-full p-2 border rounded"
            placeholder="Write your story..."
            value={story}
            onChange={(e) => setStory(e.target.value)}
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            className="mt-2 bg-cyan-600 text-white px-4 py-2 rounded hover:text-black hover:bg-white"
            onClick={handleSubmit}
          >
            Add Story
          </button>
        </div>
        <StoryCard
          author="Shyam"
          content=" successfully completed Introduction to Front-End Development, an online course authorized by Meta and offered through Coursera"
        />
        <StoryCard
          author="Shyam"
          content="Graduated with a Bachelor of Technology from Mar Athanasius College of Engineering, Kothamangalam in 2022"
        />
        <StoryCard
          author="Shyam"
          content="Completed Higher Secondary from Sy.Mary's HSS, Edoor in 2017"
        />
      </div>
    </div>
  );
};

export default HomePage;
