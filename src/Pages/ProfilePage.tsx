import React from "react";

const ProfilePage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Profile</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Personal Progress */}
        <div className="p-4 border rounded shadow">
          <h3 className="font-bold mb-2">Personal Progress</h3>
          <ul>
            <li>🎯 Task Completion: 80%</li>
            <li>🔥 Active Streak: 15 days</li>
            <li>📈 Growth: Up by 10%</li>
          </ul>
        </div>

        {/* Followers */}
        <div className="p-4 border rounded shadow">
          <h3 className="font-bold mb-2">Followers</h3>
          <ul>
            <li>Dan Richard</li>
            <li>Sundar Pichai</li>
            <li>Daniel George</li>
            <li>+ 5 more...</li>
          </ul>
          <h3 className="font-bold mb-2">People You Follow</h3>
          <ul>
            <li>Joseph B. Ucuzoglu</li>
            <li>Jane Smith</li>
            <li>Satya Nadella</li>
            <li>+ 5 more...</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
