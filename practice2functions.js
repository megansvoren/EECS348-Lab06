function change_paragraph() {
    
    var borderR = document.getElementById("borderR").value;
    var borderG = document.getElementById("borderG").value;
    var borderB = document.getElementById("borderB").value;
    var borderWidth = document.getElementById("borderWidth").value;
    var backgroundR = document.getElementById("backgroundR").value;
    var backgroundG = document.getElementById("backgroundG").value;
    var backgroundB = document.getElementById("backgroundB").value;
    var paragraph = document.getElementById("paragraph");

    paragraph.style.borderColor = `rgb(${borderR},${borderG},${borderB})`;
    paragraph.style.borderWidth = borderWidth;
    paragraph.style.backgroundColor = `rgb(${backgroundR},${backgroundG},${backgroundB})`;
    
}