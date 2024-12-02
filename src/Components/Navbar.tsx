import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-teal-900 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="flex justify-between items-center space-x-4">
          <img src="/public/logo/makerble1.png" alt="logo-1" className="h-8 " />
          <h1 className="text-2xl font-bold">Makerble</h1>
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/contacts" className="hover:text-gray-300">
            Contacts
          </Link>
          <Link to="/tasks" className="hover:text-gray-300">
            Tasks
          </Link>
          <Link to="/profile" className="hover:text-gray-300">
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
