import Home from "../src/pages/Home/Home";
import Chat from "../src/pages/Chat/Chat";
import ListChat from "../src/pages/Chat/ListChat";
import Pembayaran from "../src/pages/Pembayaran/Pembayaran";
import Detail from "./pages/Detail/Detail";
// import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

// const root = createRoot(document.getElementById("root"));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/listchat" element={<ListChat />} />
        <Route path="/pembayaran" element={<Pembayaran />} />
        <Route path="/detail/:id" element={<Detail/>} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;