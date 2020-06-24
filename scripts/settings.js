let colors = {
    "bg": {
        "black": "#000000",
        "dark": "#333333",
        "light": "#AFAFAF",
        "white": "#FFFFFF"
    },
    "fg": {
        "black": "#FFFFFF",
        "dark": "#AFAFAF",
        "light": "#333333",
        "white": "#000000"
    },
    "main": {
        "red": ["#FF0000", "#AA0000", "#770000"],
        "yellow": ["#CEFF00", "#78C800", "#828200"],
        "green": ["#00C100", "#00A600", "#005000"],
        "blue": ["#00009D", "#000085", "#000065"]
    }
};

document.getElementsByName("color_main").forEach(function(el) {
    let color = colors["main"][el.getAttribute("value")];
    el.style.backgroundColor = color[0];
    el.onchange = setColor;
});
function setColor() {
    let color = colors["main"][this.getAttribute("value")];
    document.documentElement.style.setProperty("--main-color", color[0]);
    document.documentElement.style.setProperty("--sub-color", color[1]);
    document.documentElement.style.setProperty("--main-bg2", color[2]);
}

document.getElementsByName("color_bg").forEach(function(el) {
    let color = colors["bg"][el.getAttribute("value")];
    el.style.backgroundColor = color;
    el.onchange = setBg;
});
function setBg() {
    let color = this.value;
    document.documentElement.style.setProperty("--main-bg", colors["bg"][color]);
}

document.getElementsByName("color_fg").forEach(function(el) {
    let color = colors["fg"][el.getAttribute("value")];
    el.style.backgroundColor = color;
    el.onchange = setFg;
});
function setFg() {
    let color = this.value;
    document.documentElement.style.setProperty("--main-fg", colors["fg"][color]);
}