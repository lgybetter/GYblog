function onClick() {
    // document.getElementById("change-button").style.backgroundColor = color;
    let signIn = document.getElementById("form-container-sign-in");
    let backgroundText = document.getElementById("text-container-left");
    let backgroundColor = document.getElementById("change-button");
    let innerText = document.getElementById("change-button-text");
    let signUp = document.getElementById("form-container-sign-up");
    let backgroundTextright = document.getElementById("text-container-right");
    showOrHidden(signIn);
    showOrHidden(backgroundText);
    changeColor(backgroundColor);
    changeText(innerText);
    showOrHidden(signUp);
    showOrHidden(backgroundTextright);
}

function showOrHidden(obj) {
    if (obj.style.display == 'block') {
        obj.style.display = 'none';
        console.log("changeNone");
    } else {
        obj.style.display = 'block';
    }
}

function changeColor(obj) {
    console.log(obj.ownerDocument.defaultView.getComputedStyle(obj).backgroundColor.toString())
    if (obj.ownerDocument.defaultView.getComputedStyle(obj).backgroundColor.toString() == "rgb(22, 22, 22)") {
        obj.style.backgroundColor = '#00db8b';
    } else {
        obj.style.backgroundColor = '#161616';
    }
}

function changeText(obj) {
    console.log(obj.innerText)
    if (obj.innerHTML == "Sign Up") {
        obj.innerHTML = "Sign In";
    } else {
        obj.innerHTML = "Sign Up";
    }
}

// HTMLElement.prototype.__defineGetter__("currentStyle", function() {
//     return this.ownerDocument.defaultView.getComputedStyle(this, null);
// });