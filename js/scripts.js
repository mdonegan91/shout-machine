// function fetchShoutInput() {
//     const shoutInput = document.getElementById("shoutingInput").value;
//     document.querySelector("span#shoutingInput1").innerText = shoutInput.toUpperCase()
// }

// function setFormSubmissionEventHandler() {
//     let form = document.querySelector("form");
//     form.onsubmit = function (event) {
//         event.preventDefault();
//         fetchShoutInput();
//         document.querySelector("div#shouting").removeAttribute("class");
//     };
// };

// window.onload = function () {
//     setFormSubmissionEventHandler();
// }

window.onload = function () {
    let textSize = 20;
    let form = document.querySelector("form");
    form.onsubmit = function (event) {
        event.preventDefault();

        const text = document.getElementById("Input").value;
        textSize = textSize * 2;
        document.querySelector("span#textInput").style.fontSize = textSize + "px";
        document.querySelector("span#textInput").innerText = text.toUpperCase();

        document.querySelector("div#text").removeAttribute("class");

    };

};