// import Navbar from "./Components/Navbar";
// function App() {
//   return (
//     <div>
//       <Navbar />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/Homepage";
import ContactsPage from "./Pages/ContactsPage";
import TasksPage from "./Pages/TasksPage";
import ProfilePage from "./Pages/ProfilePage";
import Footer from "./Components/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
