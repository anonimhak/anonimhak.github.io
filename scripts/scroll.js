function scrollToTop() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let b = document.body || document.getElementsByTagName("body")[0];
b.insertAdjacentHTML("beforeend", '<button id="scrollToTop" title="Scroll to TOP" onclick="scrollToTop()"></button>');

window.onscroll = function() {
    let t = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        t.style.bottom = "0";
        t.style.right = "0";
        t.style.visibility = "visible";
    } else {
        t.style.bottom = "-30px";
        t.style.right = "-30px";
        t.style.visibility = "hidden";
    }
};