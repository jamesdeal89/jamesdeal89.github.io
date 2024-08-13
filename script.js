
const hirebut = document.getElementById("hirebut");

function follow(event) {
    hirebut.style.left = event.clientX + "px";
    hirebut.style.top = event.clientY + "px";
}

document.addEventListener("mousemove", follow);