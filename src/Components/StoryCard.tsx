import React from "react";
import { FaUser, FaHeart } from "react-icons/fa";

interface StoryCardProps {
  author: string;
  content: string;
}

const StoryCard: React.FC<StoryCardProps> = ({ author, content }) => {
  return (
    <div className="border p-4 rounded shadow mb-4">
      <FaUser />
      <h3 className="font-bold text-cyan-600">{author}</h3>
      <p>{content}</p>
      <button className="mt-2 bg-slate-300 text-white px-3 py-1 rounded hover:text-black hover:bg-white">
        Expand Story
      </button>
      <button className="hover:bg-red-700 px-4 border rounded-full">
        <FaHeart />
      </button>
    </div>
  );
};

export default StoryCard;
