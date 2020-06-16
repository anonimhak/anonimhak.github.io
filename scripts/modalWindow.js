let modals = [];

function modalOpen(event) {
    let id = event.getAttribute("value");
    let modal = document.getElementById(id);
    modals.push(modal);
    modal.style.top = "0";
    modal.style.visibility = "visible";
}
function modalClose() {
    let modal = modals.pop(-1);
    modal.style.top = "-100%";
    modal.style.visibility = "hidden";
}

let heads = document.getElementsByClassName("modal_head");
Array.prototype.forEach.call(heads, function(head) {
    head.insertAdjacentHTML("beforeend", '<button class="modal_btn_close" title="Close this modal window" onclick="modalClose()">X</button>');
});
