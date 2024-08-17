
const hirebut = document.getElementById("hirebut");

// global variable to hold the last position the button was tracked to.
let lastPos = [null,null];

// handle tracking the location of the mouse pointer and moving button element underneath.
function trackMouse(event) {
    hirebut.style.left = event.pageX - hirebut.offsetWidth/2 + "px";
    hirebut.style.top = event.pageY - hirebut.offsetHeight/2 + "px";
    // store last cursor/button position for use later in animation.
    lastPos = [event.pageX, event.pageY];
}

// listen for event where the mouse is moved, pass event into trackMouse function to handle.
document.addEventListener("mousemove", trackMouse);

// async timeout for 2s, means button element will stop tracking mouse after 2s and return to original position.
setTimeout(function() {
    document.removeEventListener("mousemove", trackMouse);
    // make transition to static position smooth.

    hirebut.style.position = "static";
},2000);


