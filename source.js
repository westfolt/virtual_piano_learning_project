document.addEventListener("keydown", function (event){
    switch (event.code){
        case "KeyA":
            let musA = new Audio("music/A.mp3");
            musA.play();
            break;
        case "KeyS":
            let musS = new Audio("music/S.mp3");
            musS.play();
            break;
        case "KeyD":
            let musD = new Audio("music/D.mp3");
            musD.play();
            break;
        case "KeyF":
            let musF = new Audio("music/F.mp3");
            musF.play();
            break;
        case "KeyG":
            let musG = new Audio("music/G.mp3");
            musG.play();
            break;
        case "KeyH":
            let musH = new Audio("music/H.mp3");
            musH.play();
            break;
        case "KeyJ":
            let musJ = new Audio("music/J.mp3");
            musJ.play();
            break;
        case "KeyW":
            let musW = new Audio("music/D.mp3");
            musW.play();
            break;
        case "KeyE":
            let musE = new Audio("music/F.mp3");
            musE.play();
            break;
        case "KeyT":
            let musT = new Audio("music/G.mp3");
            musT.play();
            break;
        case "KeyY":
            let musY = new Audio("music/H.mp3");
            musY.play();
            break;
        case "KeyU":
            let musU = new Audio("music/J.mp3");
            musU.play();
            break;
        default:
            console.log("Warning, unassigned key pressed");
            break;
    }
})