let text_btn = document.getElementById("text_btn");
let text = document.getElementById("text");

text_btn.addEventListener("click", cambiarStyle);

function cambiarStyle() {
    text.classList.toggle("mostrar");

    if (text.classList.contains("mostrar")) {
        text_btn.innerHTML = "mostrar menos";
    } else {
        text_btn.innerHTML = "mostrar mas";
    }
}