function tabTogle(event) {
    for (let btn of document.getElementsByClassName("tab_button")) {btn.classList.remove("active");}
    this.classList.add("active");
    for (let con of document.getElementsByClassName("tab_content")) {con.classList.remove("active");}
    document.getElementById(this.value).classList.add("active");
}

for (let btn of document.getElementsByClassName("tab_button")) {btn.onclick = tabTogle;}