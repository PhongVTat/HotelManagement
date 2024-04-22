var tabButtons = document.querySelectorAll(".tabWrapper .buttonWrapper button");
var tabContent = document.querySelectorAll(".tabWrapper .tabContent");

function ShowContent(panelIndex, colorCode) {
    tabButtons.forEach(function (node) {
        node.style.backgroundColor = "";
        node.style.color = "";
    });
    tabButtons[panelIndex].style.backgroundColor = colorCode;
    tabButtons[panelIndex].style.color = "white";
    tabContent.forEach(function (node) {
        node.style.display = "none";
    });
    tabContent[panelIndex].style.display = "block";
    tabContent[panelIndex].style.backgroundColor = colorCode;
}

ShowContent(0,'#53ac97');
