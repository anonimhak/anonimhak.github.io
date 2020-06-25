let colors = {
    "main": {
        "red": ["#FF0000", "#AA0000", "#770000"],
        "yellow": ["#CEFF00", "#78C800", "#828200"],
        "green": ["#00C100", "#00A600", "#005000"],
        "blue": ["#00009D", "#000085", "#000065"]
    },
    "bg": {
        "black": "#000000",
        "dark": "#333333",
        "light": "#AFAFAF",
        "white": "#FFFFFF"
    },
    "fg": {
        "black": "#000000",
        "dark": "#333333",
        "light": "#AFAFAF",
        "white": "#FFFFFF"
    }
};
const defaultColors = {
    "main": "blue",
    "bg": "black",
    "fg": "white"
};
let thisColors = {...defaultColors};

function checkedElements() {
    let colorMain = document.getElementsByName("color_main");
    for (let c of colorMain) {
        if (c.value == thisColors.main) {c.checked = true;}
    }
    let colorBg = document.getElementsByName("color_bg");
    for (let c of colorBg) {
        if (c.value == thisColors.main) {c.checked = true;}
    }
    let colorFg = document.getElementsByName("color_bg");
    for (let c of colorFg) {
        if (c.value == thisColors.main) {c.checked = true;}
    }
}
checkedElements();

function savaConfigColors() {
    localStorage.setItem("colors", JSON.stringify(thisColors));
}
function setAllColors() {
    setColor(thisColors.main);
    setBg(thisColors.bg);
    setFg(thisColors.fg);
    checkedElements();
}

let _colors = localStorage.getItem("colors");
if (_colors) {thisColors = JSON.parse(_colors);}
setAllColors();
delete _colors;

for (let el of document.getElementsByName("color_main")) {
    let color = colors["main"][el.getAttribute("value")];
    el.style.backgroundColor = color[0];
    el.onchange = setColor;
}
function setColor(c) {
    const colorName = this.value || c;
    thisColors["main"] = colorName;
    let color = colors["main"][colorName];
    document.documentElement.style.setProperty("--main-color", color[0]);
    document.documentElement.style.setProperty("--sub-color", color[1]);
    document.documentElement.style.setProperty("--main-bg2", color[2]);
    savaConfigColors();
}

for (let el of document.getElementsByName("color_bg")) {
    let color = colors["bg"][el.getAttribute("value")];
    el.style.backgroundColor = color;
    el.onchange = setBg;
}
function setBg(c) {
    const color = this.value || c;
    thisColors["bg"] = color;
    document.documentElement.style.setProperty("--main-bg", colors["bg"][color]);
    savaConfigColors();
}

for (let el of document.getElementsByName("color_fg")) {
    let color = colors["fg"][el.getAttribute("value")];
    el.style.backgroundColor = color;
    el.onchange = setFg;
}
function setFg(c) {
    const color = this.value || c;
    thisColors["fg"] = color;
    document.documentElement.style.setProperty("--main-fg", colors["fg"][color]);
    savaConfigColors();
}

document.getElementById("btnResetColors").onclick = resetColors;

function resetColors() {
    thisColors = {...defaultColors};
    setAllColors();
}
