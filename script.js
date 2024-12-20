console.log("Script loaded");

// Menü megjelenítése gombnyomásra
document.getElementById('MenuButton').addEventListener('click', () => {
    document.getElementById('menuPanel').style.display = 'flex'; // Megjeleníti a menüt
});

// Menü elrejtése a bezáró gombbal
document.getElementById('closeMenuButton').addEventListener('click', () => {
    document.getElementById('menuPanel').style.display = 'none'; // Elrejti a menüt
});




const imageUrls = [
    'Pictures/GinTo30.png', 'Pictures/GinTo40.png', 'Pictures/GinTo50.png', 'Pictures/GinTo60.png', 'Pictures/GinTo70.png', 'Pictures/GinTo80.png', 'Pictures/GinTo90.png' , 'Pictures/GinTo100.png', 'Pictures/GinTo0.png',
    'Pictures/kuvasz2.jpg', 'Pictures/kuvasz4.png' , 'Pictures/kuvasz6.png' ,'Pictures/kuvasz8.jpg' ,'Pictures/kuvasz10.jpg' , 'Pictures/kuvasz12.png', 'Pictures/menus.png' /* stb., összesen 20 kép URL-je */
];

function preloadImages(imageUrls, callback) {
    let imagesLoaded = 0;
    const totalImages = imageUrls.length;

    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
        
        img.onload = function () {
            imagesLoaded++;
            // Ha minden kép betöltődött, meghívjuk a callback függvényt
            if (imagesLoaded === totalImages) {
                callback();
            }
        };
        
        img.onerror = function () {
            console.error(`Nem sikerült betölteni a képet: ${url}`);
            imagesLoaded++;
            if (imagesLoaded === totalImages) {
                callback();
            }
        };
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const loadingScreen = document.getElementById('loading');
    const mainContent = document.getElementById('MainContent');
    
    // Indítjuk el a képek betöltését
    preloadImages(imageUrls, function() {
        // Miután minden kép betöltődött, elrejtjük a loading képernyőt és megjelenítjük a mainContent-et
        loadingScreen.style.display = 'none';
        mainContent.style.display = 'block';
    });
});


let clickCount = 0;
let poharCount = 0;

document.getElementById("changeImageButton").addEventListener("click", function() {
    clickCount += 1;
    
    
    switch (clickCount) {
        case 5:
            document.getElementById("changeImageButton").style.backgroundImage = "url('Pictures/GinTo100.png')";
            break;
        case 10:
            document.getElementById("changeImageButton").style.backgroundImage = "url('Pictures/GinTo90.png')";
            break;
        case 15:
            document.getElementById("changeImageButton").style.backgroundImage = "url('Pictures/GinTo80.png')";
            break;
        case 20:
            document.getElementById("changeImageButton").style.backgroundImage = "url('Pictures/GinTo70.png')";
            break;
        case 25:
            document.getElementById("changeImageButton").style.backgroundImage = "url('Pictures/GinTo60.png')";
            break;
        case 30:
            document.getElementById("changeImageButton").style.backgroundImage = "url('Pictures/GinTo50.png')";
            break;
        case 35:
            document.getElementById("changeImageButton").style.backgroundImage = "url('Pictures/GinTo40.png')";
            break;
        case 40:
            document.getElementById("changeImageButton").style.backgroundImage = "url('Pictures/GinTo30.png')";
            break;
        case 45:
            document.getElementById("changeImageButton").style.backgroundImage = "url('Pictures/GinTo20.png')";
            break;
        case 50:
            document.getElementById("changeImageButton").style.backgroundImage = "url('Pictures/GinTo10.png')";
            break;
        case 55: 
            document.getElementById("changeImageButton").style.backgroundImage = "url('Pictures/GinTo100.png')";
            poharCount += 1;
            clickCount = 0;
            break;
        default:
            break;
    }
    switch(poharCount){
        case 1:
            document.getElementById("picturebox").style.backgroundImage = "url('Pictures/kuvasz2.jpg')";
            document.getElementById("clickCountLabel").textContent ="Eddigi Poharak:"+ poharCount + " db";
            
            break;
        case 2:
            document.getElementById("picturebox").style.backgroundImage = "url('Pictures/kuvasz4.png')";
            document.getElementById("clickCountLabel").textContent ="Eddigi Poharak:"+ poharCount + " db";
            break;
        case 3:
            document.getElementById("picturebox").style.backgroundImage = "url('Pictures/kuvasz6.png')";
            document.getElementById("clickCountLabel").textContent ="Eddigi Poharak:"+ poharCount + " db";
            break;
        case 4:
            document.getElementById("picturebox").style.backgroundImage = "url('Pictures/kuvasz8.jpg')";
            document.getElementById("clickCountLabel").textContent ="Eddigi Poharak:"+ poharCount + " db";
            break;
        case 5:
            document.getElementById("picturebox").style.backgroundImage = "url('Pictures/kuvasz10.jpg')";
            document.getElementById("clickCountLabel").textContent ="Eddigi Poharak:"+ poharCount + " db";
            break;
        case 6:
            document.getElementById("picturebox").style.backgroundImage = "url('Pictures/kuvasz12.png')";
            document.getElementById("clickCountLabel").textContent ="Eddigi Poharak:"+ poharCount + " db";
            break;
        case 7:
            document.getElementById("picturebox").style.backgroundImage = "url('Pictures/kuvasz14.jpg')";
            document.getElementById("clickCountLabel").textContent ="Eddigi Poharak:"+ poharCount + " db";
            break;
        case 8:
            document.getElementById("picturebox").style.backgroundImage = "url('Pictures/kuvasz16.png')";
            document.getElementById("clickCountLabel").textContent ="Eddigi Poharak:"+ poharCount + " db";
            break;
        case 9:
            document.getElementById("picturebox").style.backgroundImage = "url('Pictures/kuvasz18.png')";
            document.getElementById("changeImageButton").disabled = true; 
            document.getElementById("clickCountLabel").textContent ="Kuvasz kidőld" + poharCount + "pohár után";
            break;
        default: break;

    }


});