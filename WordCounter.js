document.getElementById("button").addEventListener("click", function() {
    var text = document.getElementById("floatingTextarea2").value;
    text = text.trim();
    var wordCount = text.split(" ").filter(function(word) {
        return word.length > 0;
    }).length;
    var charCount = text.length;

    alert("Number of words: " + wordCount + "\nNumber of characters: " + charCount);
});