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
    }
};

document.getElementsByName("color_main").forEach(function(el) {
    let color = el.getAttribute("value");
    el.style.backgroundColor = color;
    el.onchange = setColor;
});
function setColor() {
    let color = this.getAttribute("value");
    document.documentElement.style.setProperty("--main-color", color);
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