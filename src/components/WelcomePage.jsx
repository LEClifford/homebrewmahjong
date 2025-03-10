import React, { useState } from 'react';

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
            <button>Host Room</button>
            <button>Join Room</button>
            <button>Log In</button>
            <button>Sign Up</button>
        </div>
    );
}

export default WelcomePage;