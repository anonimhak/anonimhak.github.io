let styles = getComputedStyle(document.documentElement);
let timeing = styles.getPropertyValue("--timeing").replace("s", "") * 1000;
function menu_toggle(event) {
    event.disabled = true;
    event.classList.toggle("active");
    setTimeout(()=>{event.disabled = false;}, timeing*2);
    document.getElementById("menu").classList.toggle("active");
    let els = document.getElementsByClassName("menu_close");
    Array.prototype.forEach.call(els, function(el) {
        // Do stuff here
        console.log(el.tagName);
    });
}