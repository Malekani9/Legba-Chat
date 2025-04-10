import React, { useState } from "react";
import Chat from "./components/Chat";
import RideModal from "./components/RideModal";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">LEGBA 🔮</h1>
      <Chat onRidePlan={() => setModalOpen(true)} />
      {modalOpen && <RideModal onClose={() => setModalOpen(false)} />}
    </div>
  );
}
