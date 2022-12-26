import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SetAvatar from "./pages/SetAvatar";

export default function App() {
  return (
    <Routes>
    <Route path="/" element={<Navigate to="/Login" />} >

    <Route path="*" element={<Navigate to="/" />} />

    </Route>

      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/setAvatar" element={<SetAvatar />} />

      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}
