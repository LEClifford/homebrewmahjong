import React from "react";
import { Link } from "react-router-dom";

function WelcomePage () {
    return (
        <div>
            <h1>Homebrew Mahjong</h1>
            <h2>Get ready for a night on the tiles with fast paced Homebrew MahJong</h2>
            <h3>How to play:</h3>
            <p>Host a room and use the code to invite 3 friends to play.
                If you want to join a room, enter the code and join the game.
                You can play without signing up, but you won't be able to save your progress.
            </p>
            <Link to="/create-room">
        <button>Create Room</button>
      </Link>
      <Link to="/join-room">
        <button>Join Room</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
        </div>
    );
}

export default WelcomePage;