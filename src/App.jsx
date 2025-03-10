import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css'
import WelcomePage from './components/WelcomePage';
import CreateRoom from './components/CreateRoom';
import JoinRoom from './components/JoinRoom';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/create" element={<CreateRoom />} />
        <Route path="/join" element={<JoinRoom />} />
        <Route path="/game/:roomCode" element={<GameRoom />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
       
  );
}

export default App;

