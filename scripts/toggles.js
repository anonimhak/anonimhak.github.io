function togglesToggle() {
    document.getElementsByClassName("toggles_list")[0].classList.toggle("active");
}
document.getElementsByClassName("toggles_btn")[0].addEventListener("click", togglesToggle);