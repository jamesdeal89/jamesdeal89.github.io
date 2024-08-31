
const hirebut = document.getElementById("hirebut");


document.addEventListener("mousemove", function(event) {
    hirebut.style.left = event.pageX - hirebut.offsetWidth/2 + "px";
    hirebut.style.top = event.pageY - hirebut.offsetHeight/2 + "px";
});