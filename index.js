const toggleSwitch = document.getElementById("toggleSwitch");
const body = document.body;

toggleSwitch.addEventListener("change", function() {
    const content = document.querySelector(".content");
    if (toggleSwitch.checked) {
        content.style.visibility = "visible";
        body.style.backgroundColor = "white";
        slider.style.border = "blue";
    } else {
        content.style.visibility = "hidden";
        body.style.backgroundColor = "black";
        slider.style.border = "yellow";
    }
});