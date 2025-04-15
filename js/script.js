function replaceName () {
    let name = prompt("What is Your Name?");
    document.getElementById("name"). innerHTML = name
}

document.getElementById('tombol').addEventListener("click", function() {
    replaceName()
})