let eclipse = document.getElementById("eclipse");

function eclipseOpen(func) {
    eclipse.style.opacity = "1";
    eclipse.style.visibility = "visible";
    eclipse.onclick = func;
}
function eclipseClose() {
    eclipse.style.opacity = "0";
    eclipse.style.visibility = "hidden";
    eclipse.onclick = NaN;
}
