// script.js
document.addEventListener('DOMContentLoaded', () => {

    // Konami Code Easter Egg
    let konamiCode = [];
    const requiredCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Up, Up, Down, Down, Left, Right, Left, Right, B, A
    window.addEventListener('keydown', (e) => {
        konamiCode.push(e.keyCode);
        if (konamiCode.join('') === requiredCode.join('')) {
            document.getElementById('konami-code-display').style.display = 'inline';
            alert('Konami Code Activated! You found the easter egg!');
            konamiCode = []; // Reset the code
            startConfetti(); // Start confetti animation (requires confetti.js)
        }
    });




    // Draggable Box
    const draggableBox = document.getElementById('draggable-box');
    let isDragging = false;
    let offsetX, offsetY;

    draggableBox.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - draggableBox.offsetLeft;
        offsetY = e.clientY - draggableBox.offsetTop;
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            draggableBox.style.left = (e.clientX - offsetX) + 'px';
            draggableBox.style.top = (e.clientY - offsetY) + 'px';
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    // Clock
    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        document.getElementById('current-time').textContent = timeString;
    }
    setInterval(updateClock, 1000);


    // Dark Mode
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });


    // Canvas Animation (Example)
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    let x = 50;
    let speedX = 2;

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        ctx.beginPath();
        ctx.arc(x, 100, 20, 0, Math.PI * 2);
        ctx.fillStyle = 'red';
        ctx.fill();

        x += speedX;
        if (x + 20 > canvas.width || x - 20 < 0) {
            speedX = -speedX;
        }

        requestAnimationFrame(animate);
    }

    animate();



});