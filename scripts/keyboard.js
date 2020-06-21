let forEscape = null;

function keyboardHandler(event) {
    if (event.keyCode == 27 && forEscape != null) {
        forEscape();
    }
}

document.addEventListener("keydown", keyboardHandler);