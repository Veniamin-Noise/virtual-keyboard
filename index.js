const element = document.querySelector("body");

function newElem(tag = "div", parentSelector = "", Class = null, text = "") {
    elem = document.createElement(tag)
    if (Class != null) {
        elem.classList.add(Class);
    }
    if (text != "") {
        elem.appendChild(document.createTextNode(text));
    }

    if (parentSelector != "") document.querySelector(parentSelector).appendChild(elem);
    else element.appendChild(elem);;
}

newElem("div", "body", "wrapper")
newElem("div", ".wrapper", "keyboard")

const alphabet = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'], 
    ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'DEL'], 
    ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'ENTER'], 
    ['Shift', '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '.', ',', '/', '▲', 'Shift'],
    ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '◄', '▼', '►'],
]
const alphabetKeys = [
    ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'], 
    ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'], 
    ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', "Quote", 'Enter'], 
    ['ShiftLeft', 'Backslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Period', 'Comma', 'Slash', 'ArrowUp', 'ShiftRight'],
    ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', '◄ArrowLeft', 'ArrowDown', 'ArrowRight']
]

const darkKeys = [[0, 13], [0, 14], [0, 12], [0, 12, 13], [0, 1, 2, 4, 5, 6, 7, 8]]

newElem("div", ".keyboard", "keyboard__keys", "")
newElem("div", ".keyboard", "keyboard__keys", "")
newElem("div", ".keyboard", "keyboard__keys", "")
newElem("div", ".keyboard", "keyboard__keys", "")
newElem("div", ".keyboard", "keyboard__keys", "")

for (let i = 0; i < alphabet.length; i++) {
    k = 0
    for (let j = 0; j < alphabet[i].length; j++) {
        newElem("div", `.keyboard__keys:nth-child(${i + 1})`, "keyboard__key", alphabet[i][j])
        if (darkKeys[i][k] == j) {
            document.querySelector(`.keyboard__keys:nth-child(${i + 1}) .keyboard__key:nth-child(${j + 1}`).classList.add("keyboard__key_dark");
            k++;
        }

        if (j == 13 && i == 0) document.querySelector(`.keyboard__keys:nth-child(${i + 1}) .keyboard__key:nth-child(${j + 1}`).classList.add("keyboard__key_backspace");
        else if (j == 0 && i == 1) document.querySelector(`.keyboard__keys:nth-child(${i + 1}) .keyboard__key:nth-child(${j + 1}`).classList.add("keyboard__key_tab");
        else if (j == 14 && i == 1) document.querySelector(`.keyboard__keys:nth-child(${i + 1}) .keyboard__key:nth-child(${j + 1}`).classList.add("keyboard__key_del");
        else if (j == 0 && i == 2) document.querySelector(`.keyboard__keys:nth-child(${i + 1}) .keyboard__key:nth-child(${j + 1}`).classList.add("keyboard__key_caps-lock");
        else if (j == 12 && i == 2) document.querySelector(`.keyboard__keys:nth-child(${i + 1}) .keyboard__key:nth-child(${j + 1}`).classList.add("keyboard__key_enter");
        else if (j == 0 && i == 3) document.querySelector(`.keyboard__keys:nth-child(${i + 1}) .keyboard__key:nth-child(${j + 1}`).classList.add("keyboard__key_shift");
        else if (j == 0 && i == 4) document.querySelector(`.keyboard__keys:nth-child(${i + 1}) .keyboard__key:nth-child(${j + 1}`).classList.add("keyboard__key_ctrl");
        else if (j == 1 && i == 4) document.querySelector(`.keyboard__keys:nth-child(${i + 1}) .keyboard__key:nth-child(${j + 1}`).classList.add("keyboard__key_win");
        else if (j == 2 && i == 4) document.querySelector(`.keyboard__keys:nth-child(${i + 1}) .keyboard__key:nth-child(${j + 1}`).classList.add("keyboard__key_alt");
        else if (j == 3 && i == 4) document.querySelector(`.keyboard__keys:nth-child(${i + 1}) .keyboard__key:nth-child(${j + 1}`).classList.add("keyboard__key_space");
        else if (j == 4 && i == 4) document.querySelector(`.keyboard__keys:nth-child(${i + 1}) .keyboard__key:nth-child(${j + 1}`).classList.add("keyboard__key_alt");
        else if (j == 5 && i == 4) document.querySelector(`.keyboard__keys:nth-child(${i + 1}) .keyboard__key:nth-child(${j + 1}`).classList.add("keyboard__key_ctrl");
    }
}


document.addEventListener('keydown', function(event) {
    console.log(event.code)
    // document.querySelector(`.keyboard__key_caps-lock`).classList.add("keyboard__key_active");
});

document.addEventListener('keyup', function(event) {
    if (event.code == 'KeyZ') document.querySelector(`.keyboard__key_caps-lock`).classList.remove("keyboard__key_active");
});
// while (true) {
//     if ()
// }