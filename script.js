 <script src="script.js"></script>

var i = 0, text;
text = "WELCOME TO CREATIVE-MIND!";

function typing() {
    if (i < text.length) {
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}
typing();