import Home from "../src/pages/Home/Home";
import Chat from "../src/pages/Chat/Chat";
import Pembayaran from "../src/pages/Pembayaran/Pembayaran";
import { Routes, Route } from "react-router-dom";
import React from "react";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/pembayaran" element={<Pembayaran />} />
      </Routes>
    </div>
  );
};

export default App;