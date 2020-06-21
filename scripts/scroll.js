let scrollLock = false;
let scrollLocation = [0, 0]; // Left Top

function scrollToTop() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let body = document.body || document.documentElement;
body.insertAdjacentHTML("beforeend", '<button id="scrollToTop" title="Scroll to TOP"><svg class="icon"><use xlink:href="#icon_up"></use></svg></button>');

document.getElementById("scrollToTop").addEventListener("click", scrollToTop);

function scrollUnLocked() {
    scrollLocation[0] = 0;
    scrollLocation[1] = 0;
    scrollLock = false;
}
function scrollLocked() {
    scrollLocation[1] = window.pageYOffset || document.documentElement.scrollTop;
	scrollLocation[0] = window.pageXOffset || document.documentElement.scrollLeft;
    scrollLock = true;
}

function pageScrollHandler() {
    if (scrollLock) {
        window.scrollTo(scrollLocation[0], scrollLocation[1]);
    } else {
        let btnToTop = document.getElementById("scrollToTop");
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            btnToTop.classList.add("active");
        } else {
            btnToTop.classList.remove("active");
        }
    }
}
pageScrollHandler();

window.onscroll = pageScrollHandler;