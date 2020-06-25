window.onload = function() {
    setTimeout(function() {
        let load = document.getElementById("page_load");
        if (!load.classList.contains("done")) {
            load.classList.add("done");
        }
    }, 1000)
}