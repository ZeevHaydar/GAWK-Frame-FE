import Home from "../src/pages/Home/Home";
import Chat from "../src/pages/Chat/Chat";
import Pembayaran from "../src/pages/Pembayaran/Pembayaran";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/pembayaran" element={<Pembayaran />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;