'use strict';
//get the div items in the game
const gameBoardDIV = document.getElementById("gameboard")
const loadingBeeDIV = document.getElementById("loadingBee")
const gameDIV = document.getElementById("game")
const wordDIV = document.getElementById("word")
const lettersDIV = document.getElementById("letters")

// get the div items in the wordsBank
const wordsBankDIV = document.querySelector("#wordsBank")
const foundTitle = document.querySelector("#foundTitle")
const wordsDIV = document.querySelector("#words")

//create your buttons
const a_button = document.createElement("button")
a_button.classList.add("button", "is-warning", "m-2")
// gives the div the value of A
a_button.setAttribute("value", "A")
a_button.innerHTML = "A"

const b_button = document.createElement("button")
b_button.classList.add("button", "is-warning", "m-2")
// gives the div the value of B
b_button.setAttribute("value", "B")
b_button.innerHTML = "B"

const c_button = document.createElement("button")
c_button.classList.add("button", "is-warning", "m-2")
// gives the div the value of C
c_button.setAttribute("value", "C")
c_button.innerHTML = "C"

const d_button = document.createElement("button")
d_button.classList.add("button", "is-warning", "m-2")
// gives the div the value of D
d_button.setAttribute("value", "D")
d_button.innerHTML = "D"

const e_button = document.createElement("button")
e_button.classList.add("button", "is-warning", "m-2")
// gives the div the value of E
e_button.setAttribute("value", "E")
e_button.innerHTML = "E"

const f_button = document.createElement("button")
f_button.classList.add("button", "is-warning", "m-2")
// gives the div the value of F
f_button.setAttribute("value", "F")
f_button.innerHTML = "F"

const addButton = document.createElement("div")
addButton.classList.add("button", "is-black")

//write the function to add the buttons to your HTML on page load
//** NOTE: setTimeout is just to slow the load so you can see it. but you could use it to add a CSS loaders and other neat stuff!! :)

//using EventListener "DOMContentLoaded", load the add buttons


//using an IIFE, load the letter button
//Why did I put the letters in the IFFE??  HINT: LOOK AT THE CONSOLE LOG AND SEE WHEN IT FIRES.


//Step-3 write the listeners to take a letter and add to your word div


//add a function to take your word from the word div and add it to an Array to then add to your Words Bank



