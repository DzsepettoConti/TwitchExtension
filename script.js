console.log("Script loaded");

let clickCount = 0;
let poharCount = 0;

document.getElementById("changeImageButton").addEventListener("click", function() {
    clickCount += 1;
    
    
    switch (clickCount) {
        case 5:
            document.getElementById("changeImageButton").style.backgroundImage = "url('Pictures/GinTo30.png')";
            break;
        case 10:
            document.getElementById("changeImageButton").style.backgroundImage = "url('Pictures/GinTo40.png')";
            break;
        case 15:
            document.getElementById("changeImageButton").style.backgroundImage = "url('Pictures/GinTo50.png')";
            break;
        case 20:
            document.getElementById("changeImageButton").style.backgroundImage = "url('Pictures/GinTo60.png')";
            break;
        case 25:
            document.getElementById("changeImageButton").style.backgroundImage = "url('Pictures/GinTo70.png')";
            break;
        case 30:
            document.getElementById("changeImageButton").style.backgroundImage = "url('Pictures/GinTo80.png')";
            break;
        case 35:
            document.getElementById("changeImageButton").style.backgroundImage = "url('Pictures/GinTo90.png')";
            break;
        case 40:
            document.getElementById("changeImageButton").style.backgroundImage = "url('Pictures/GinTo100.png')";
            break;
        case 45: 
            document.getElementById("changeImageButton").style.backgroundImage = "url('Pictures/GinTo0.png')";
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
            document.getElementById("clickCountLabel").textContent ="Kuvasz kidőld"+ poharCount + "pohár után";
            break;
        default: break;

    }


});