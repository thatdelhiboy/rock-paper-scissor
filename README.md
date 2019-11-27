# rock-paper-scissor
After basic of JavaScript, making a fun-old-school-game
its was really hard for me..(ofcourse it was first time)
taken a lots refrences.
at last i realised that;

in line 21 & 22 of app.js
    const playerHand = document.querySelectorall(".player-hand");
    const computerHand = document.querySelectorAll(".computer-hand");
I have to change to 
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
all went well ..
