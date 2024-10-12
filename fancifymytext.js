window.onload = function() {
    //  "Hello, world!" alert when the "Bigger" button is clicked
    function showHelloWorld() {
        alert("Hello, world!");
    }

    // Event handler for the "Bigger" button 
    function makeTextBigger() {
        document.getElementById("textInput").style.fontSize = "24pt";
        showHelloWorld(); // Call to display the alert
    }

    document.getElementById("biggerBtn").onclick = makeTextBigger;

    //  radio button selection
    function changeStyle() {
        const textInput = document.getElementById("textInput");
        if (document.getElementById("fancyShmancy").checked) {
            textInput.style.fontWeight = "bold";
            textInput.style.color = "blue";
            textInput.style.textDecoration = "underline";
        } else if (document.getElementById("boringBetty").checked) {
            textInput.style.fontWeight = "normal";
            textInput.style.color = "black";
            textInput.style.textDecoration = "none";
        }
    }

    //  event listeners to radio buttons
    document.getElementById("fancyShmancy").onchange = changeStyle;
    document.getElementById("boringBetty").onchange = changeStyle;

    //  uppercase the text and add "-Moo"
    function mooFunction() {
        let textArea = document.getElementById("textInput");
        let sentences = textArea.value.split(".");
        for (let i = 0; i < sentences.length; i++) {
            if (sentences[i].trim().length > 0) {
                sentences[i] = sentences[i].trim() + "-Moo";
            }
        }
        textArea.value = sentences.join(". ").toUpperCase() + ".";
    }

    document.getElementById("mooBtn").onclick = mooFunction;
};

//  alert test 
alert("Script loaded successfully!");
