function setColor(event) {
    let color = event.getAttribute("value");
    document.documentElement.style.setProperty("--main-bg", color);
    console.log(color);
}