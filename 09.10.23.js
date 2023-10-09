function changeBackgroundColor() {
    document.getElementById("myTextarea").style.backgroundColor = "yellow";
}

function convertToUpperCase(input) {
    input.value = input.value.toUpperCase();
}

function changeTextColor(select) {
    var color = select.value;
    select.style.color = color;
}

function changeFontSize(element) {
    element.style.fontSize = "xx-large";
}

function resetFontSize(element) {
    element.style.fontSize = "medium";
}

function displayImageSrc(event) {
    event.preventDefault();
    var src = event.target.getAttribute("src");
    alert("Ścieżka obrazka: " + src);
}

function copyTextToParagraph(input) {
    var text = input.value;
    var paragraph = input.nextElementSibling;
    paragraph.textContent = text;
}

function addShadow(element) {
    element.style.textShadow = "2px 2px 5px rgba(0, 0, 0, 0.5)";
}

function removeShadow(element) {
    element.style.textShadow = "none";
}