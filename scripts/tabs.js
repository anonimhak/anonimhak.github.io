function tab_togle(event) {
    document.querySelectorAll(".tab_button").forEach(
        (btn) => btn.classList.remove("active")
    );
    event.classList.add("active");
    document.querySelectorAll(".tab_content").forEach(
        (btn) => btn.classList.remove("active")
    );
    document.getElementById(event.getAttribute("value")).classList.add("active");
    
}