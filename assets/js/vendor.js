// HOME EXPANDABLE IMAGE FOR HOME VIEWS

const panels = document.querySelectorAll('.expandable');

const panelImages = [];

// Extract image URLs from panel elements
panels.forEach(panel => {
const imageUrl = panel.style.backgroundImage.slice(5, -2);
panelImages.push(imageUrl);
});

let currentIndex = 0;
let intervalId; // Store the interval ID

// Function to add 'active' class to panels at intervals
function activatePanels() {
// Remove 'active' class from all panels
panels.forEach(panel => {
panel.classList.remove('active');
});

// Add 'active' class to the panel at currentIndex
panels[currentIndex].classList.add('active');

// Move to the next panel index
currentIndex = (currentIndex + 1) % panelImages.length;
}

// Initial call to activatePanels
activatePanels();

// Set interval to call activatePanels every 2 seconds
intervalId = setInterval(activatePanels, 2000);

// Add mouseover event listener to clear interval
panels.forEach(panel => {
panel.addEventListener('mouseover', () => {
clearInterval(intervalId);
});
});

// Add mouseout event listener to restart interval
panels.forEach(panel => {
panel.addEventListener('mouseout', () => {
intervalId = setInterval(activatePanels, 2000);
});
});
