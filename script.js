console.log("Script loaded");

let clickCount = 0;

document.getElementById("changeImageButton").addEventListener("click", function() {
    clickCount += 1;
    document.getElementById("clickCountLabel").textContent = "Eddigi Gintoinc: " + clickCount + " db";
    
    switch (clickCount) {
        case 2:
            document.getElementById("picturebox").style.backgroundImage = "url('Pictures/kuvasz2.jpg')";
            break;
        case 4:
            document.getElementById("picturebox").style.backgroundImage = "url('Pictures/kuvasz4.png')";
            break;
        case 6:
            document.getElementById("picturebox").style.backgroundImage = "url('Pictures/kuvasz6.png')";
            break;
        case 8:
            document.getElementById("picturebox").style.backgroundImage = "url('Pictures/kuvasz8.jpg')";
            break;
        case 10:
            document.getElementById("picturebox").style.backgroundImage = "url('Pictures/kuvasz10.jpg')";
            break;
        case 12:
            document.getElementById("picturebox").style.backgroundImage = "url('Pictures/kuvasz12.png')";
            break;
        case 14:
            document.getElementById("picturebox").style.backgroundImage = "url('Pictures/kuvasz14.jpg')";
            break;
        case 16:
            document.getElementById("picturebox").style.backgroundImage = "url('Pictures/kuvasz16.png')";
            break;
            case 18:
            document.getElementById("picturebox").style.backgroundImage = "url('Pictures/kuvasz18.png')";
            document.getElementById("changeImageButton").disabled = true;
            document.getElementById("changeImageButton").textContent = "Kuvasz kidőlt"
            document.getElementById("clickCountLabel").textContent = "Eddigi Gintoinc: " + clickCount + " db, Kuvasz kidőlt";
            break;
        default:
            // No action for other values of clickCount
            break;
    }
});
