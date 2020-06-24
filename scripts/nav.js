function menuOpen() {
    let btn = document.getElementById("menu_toggle");
    document.getElementById("menu").classList.add("active");
    scrollLocked();
    forEscape = menuClose;
    eclipseOpen(menuClose);
}
function menuClose() {
    let btn = document.getElementById("menu_toggle");
    document.getElementById("menu").classList.remove("active");
    scrollUnLocked();
    forEscape = null;
    eclipseClose();
}

document.getElementById("menu_open").addEventListener("click", menuOpen);
document.getElementById("menu_close").addEventListener("click", menuClose);

function subMenuToggle() {
    this.getElementsByClassName("nav_sub_list")[0].classList.toggle("active");
    this.classList.toggle("rotate");
}
function subMenuOpen() {this.getElementsByClassName("nav_sub_list")[0].classList.add("active");}
function subMenuClose() {this.getElementsByClassName("nav_sub_list")[0].classList.remove("active");}

function resizeHandler () {
    let subMenu = document.getElementsByClassName("nav_item_list");
    if (window.innerWidth >= 760) {
        Array.prototype.forEach.call(subMenu, function(el) {
            el.removeEventListener("click", subMenuToggle);
            el.addEventListener("mouseenter", subMenuOpen);
            el.addEventListener("mouseleave", subMenuClose);
        });
    }
    else {
        Array.prototype.forEach.call(subMenu, function(el) {
            el.addEventListener("click", subMenuToggle);
            el.removeEventListener("mouseenter", subMenuOpen);
            el.removeEventListener("mouseleave", subMenuClose);
        });
    }
}
resizeHandler();

window.onresize = resizeHandler;
