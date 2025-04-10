import React, { useState } from "react";

const RideModal = ({ onClose }) => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleOpenMaps = () => {
    const url = \`https://www.google.com/maps/dir/?api=1&origin=\${encodeURIComponent(
      start
    )}&destination=\${encodeURIComponent(end)}&travelmode=driving\`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
        <h2 className="text-xl font-bold mb-4">🚕 Plan Your Ride</h2>
        <input
          type="text"
          placeholder="Start Location"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Destination"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
        <div className="flex justify-between">
          <button
            onClick={handleOpenMaps}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            Open in Maps
          </button>
          <button
            onClick={onClose}
            className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default RideModal;
