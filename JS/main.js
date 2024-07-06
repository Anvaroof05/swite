// const button = document.querySelector("#button-one");
// button.classList.add("cain")

// button.addEventListener("click", () => {
//     if (button.classList == "cain") {
//         button.classList.remove("button-one");
//         button.classList.add("")
//     }
// })
var cursor = document.getElementById('cursor');
document.addEventListener('mousemove', function(e) {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + "px"
    cursor.style.top = y + "px"
});
