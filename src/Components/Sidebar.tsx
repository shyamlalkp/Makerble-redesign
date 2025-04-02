import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-stone-100 w-full md:w-1/4 p-4 h-screen shadow">
      <div className="mb-6">
        <div className="flex space-x-4 justify-between">
          <h3 className="font-bold text-lg mb-2">Projects</h3>
          <h3 className="">New Projects</h3>
        </div>
        <ul>
          <li>
            <div className="flex justify-between">
              <Link to="#" className="text-blue-600 hover:underline">
                Test 4359
              </Link>
              <img
                src="\public\logo\Apple_Settings.webp"
                alt="logo-settings"
                className="h-4"
              />
            </div>
          </li>
          <li>
            <div className="flex justify-between">
              <Link to="#" className="text-blue-600 hover:underline">
                Test 5146
              </Link>
              <img
                src="\public\logo\Apple_Settings.webp"
                alt="logo-settings"
                className="h-4"
              />
            </div>
          </li>
          <li>
            <div className="flex justify-between">
              <Link to="#" className="text-blue-600 hover:underline">
                Training Project
              </Link>
              <img
                src="\public\logo\Apple_Settings.webp"
                alt="logo-settings"
                className="h-4"
              />
            </div>
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="font-bold text-lg mb-2">Albums</h3>
        <ul>
          <li>
            <Link to="#" className="text-blue-600 hover:underline">
              Summer 2024
            </Link>
          </li>
          <li>
            <Link to="#" className="text-blue-600 hover:underline">
              Team Building
            </Link>
          </li>
          <li>
            <Link to="#" className="text-blue-600 hover:underline">
              New Album
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-2">Organizations</h3>

        
        const organizations = ["Organization One", "Charity Two", "New Organization"];
        <ul>
          {organizations.map((name, index) => (
            <li key={index}>
              <Link to="#" className="text-blue-600 hover:underline">
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
