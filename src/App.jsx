import React from "react";
import ChatUi from "./components/ChatUi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPanel from "./components/AdminPanel";

const App = () => {
  return (
    // Set up the application's router using React Router.
    <BrowserRouter>
      <Routes>
        {/* Define routes for different pages */}
        <Route path="/" element={<ChatUi />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
