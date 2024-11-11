console.log("Script loaded");

let clickCount = 0;
const changeImageButton = document.getElementById('changeImageButton');
const picturebox = document.getElementById('picturebox');
const clickCountLabel = document.getElementById('clickCountLabel');

// URL of the new image to display after 5 clicks
const newImageUrl = 'https://raw.githubusercontent.com/DzsepettoConti/TwitchExtension/refs/heads/main/BUalap.png';

// Event listener for button clicks
changeImageButton.addEventListener('click', () => {
    clickCount += 1;
    
    // Update the click count label
    clickCountLabel.textContent = `Clicks: ${clickCount}`;
    
    if (clickCount === 5) {
        // Change the picture when button is clicked 5 times
        picturebox.style.backgroundImage = `url('${newImageUrl}')`;
        
        // Optionally reset click count to trigger again if desired
        // clickCount = 0;  // Uncomment if you want to reset after 5 clicks
    }
});
