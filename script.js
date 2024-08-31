
const hirebut = document.getElementById("hirebut");

// global variable to hold the last position the button was tracked to.
let lastPos = [null,null];
// global variable to hold where to put button after animation.
let restPos = [0,0];

// handle tracking the location of the mouse pointer and moving button element underneath.
function trackMouse(event) {
    hirebut.style.left = event.pageX - hirebut.offsetWidth/2 + "px";
    hirebut.style.top = event.pageY - hirebut.offsetHeight/2 + "px";
    // store last cursor/button position for use later in animation.
    lastPos = [event.pageX, event.pageY];
}

// listen for event where the mouse is moved, pass event into trackMouse function to handle.
document.addEventListener("mousemove", trackMouse);

// function to allow parameterisation of comparison 
function reachedPos(digitOfCurr, digitOfRest, lessThan) {
    if (lessThan) {
        return digitOfCurr < digitOfRest;
    } else {
        return digitOfCurr > digitOfRest;
    }
}

// async timeout for 2s, means button element will stop tracking mouse after 2s and return to original position.
setTimeout(function() {
    document.removeEventListener("mousemove", trackMouse);
    // initialise the current transistion position to be the last tracked position
    let currentPos = lastPos;
    let xSmaller = false, ySmaller = false;
    // check if current is larger or smaller than resting for x and y respectively
    if (currentPos[0] < restPos[0]) {
        xSmaller = true;
        compOp = 
    } else if (currentPos[1] < restPos[1]) {
        ySmaller = true;
    }
    // make transition to static position smooth.
    // loop until the current position x and y are at the desired resting position
    while (reachedPos(currentPos[0],restPos[0],xSmaller) && reachedPos(currentPos[1],restPos[1],ySmaller)) {
        hirebut.style.left = currentPos[0] - hirebut.offsetWidth/2 + "px";
        hirebut.style.top = currentPos[1] - hirebut.offsetHeight/2 + "px";
    }
},2000);


