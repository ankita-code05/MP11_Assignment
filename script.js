// Getting a reference to the container element
const container = document.getElementById('interactive-container');

// Function to change the background color
function changeBackgroundColor() {
    //it will Generate a random color code
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    // it will Set the background color of the container
    container.style.backgroundColor = randomColor;
}

// Adding a click event listener to the container
container.addEventListener('click', changeBackgroundColor);