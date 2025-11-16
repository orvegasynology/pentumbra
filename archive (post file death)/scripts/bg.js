const images = [
    '/data/assets/grounds/blog/reigen.png',
];

// Function to set a random background image
function setRandomBackground() {
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * images.length);
    // Select a random image
    const selectedImage = images[randomIndex];
    // Set the background image of the body
    document.body.style.backgroundImage = `url(${selectedImage})`;
}

window.onload = setRandomBackground;
