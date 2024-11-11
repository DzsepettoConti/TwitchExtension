let clickCount = 0;
const changeImageButton = document.getElementById('changeImageButton');
const picturebox = document.getElementById('picturebox');

// URL of the new image to display after 5 clicks
const newImageUrl = 'https://raw.githubusercontent.com/DzsepettoConti/TwitchExtension/refs/heads/main/BUalap.png';

// Event listener for button clicks
changeImageButton.addEventListener('click', () => {
    clickCount += 1;
    
    if (clickCount === 5) {
        // Change the picture when button is clicked 5 times
        picturebox.style.backgroundImage = `url('${newImageUrl}')`;
        
        // Reset click count (optional, in case you want it to trigger again)
        clickCount = 0;
    }
});
