
const hirebut = document.getElementById("hirebut");


document.addEventListener("mousemove", function(event) {
    hirebut.style.left = event.clientX - hirebut.offsetWidth/2 + "px";
    hirebut.style.top = event.clientY - hirebut.offsetHeight/2 + "px";
});