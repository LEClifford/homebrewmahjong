import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import WelcomePage from "./components/WelcomePage";
import CreateRoom from "./components/CreateRoom";
import JoinRoom from "./components/JoinRoom";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/create-room" element={<CreateRoom />} />
        <Route path="/join-room" element={<JoinRoom />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/game/:roomCode" element={<GameBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
