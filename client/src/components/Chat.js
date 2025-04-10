import React from "react";

const Chat = ({ onRidePlan }) => {
  return (
    <div className="w-full max-w-xl bg-white shadow rounded p-4">
      <div className="h-60 overflow-y-auto border p-2 rounded mb-4">
        <p><strong>Aya:</strong> Let's hit that art show tonight?</p>
        <p><strong>Remy:</strong> I'm down, let's Uber together.</p>
      </div>
      <button
        onClick={onRidePlan}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
      >
        🚗 Plan Uber Pickup
      </button>
    </div>
  );
};

export default Chat;
