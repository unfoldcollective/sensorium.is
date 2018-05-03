// event key_handler function
function key_handler(e) {
    var key = window.event ? e.keyCode : e.which;
    console.log("key", key);
    var controls = document.querySelector('.slides-controls');
    if (key >= 65 && key <= 90) {
        controls.classList.toggle('dn');
    }
}

// attach handler to the keydown event of the document
if (document.attachEvent) document.attachEvent('onkeydown', key_handler);
else document.addEventListener('keydown', key_handler);