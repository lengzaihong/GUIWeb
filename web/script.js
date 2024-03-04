/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 * 
 * 
 * 
 */


// script.js

// Function to greet the user
function greetUser() {
    var name = prompt("What's your name?");
    if (name) {
        alert("Hello, " + name + "! Welcome to our website!");
    }
}

// Call the greetUser function when the page is loaded
window.onload = function() {
    greetUser();
};
