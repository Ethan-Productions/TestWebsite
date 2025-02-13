// script.js

// Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    // Drawing examples
    ctx.fillStyle = 'rgb(200, 0, 0)';  // Red
    ctx.fillRect(10, 10, 50, 50);       // Filled red rectangle

    ctx.fillStyle = 'rgba(0, 0, 200, 0.25)'; // Blue with alpha (transparency)
    ctx.fillRect(70, 10, 50, 50);       // Filled blue rectangle

    ctx.beginPath();                      // Start a new path
    ctx.arc(170, 60, 40, 0, Math.PI*2); // Draw a circle (x, y, radius, startAngle, endAngle)
    ctx.strokeStyle = 'green';           // Set the stroke color
    ctx.stroke();                       // Stroke the circle (outline)

    // Add more canvas drawing commands as desired
});