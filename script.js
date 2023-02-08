const textarea = document.getElementById("evaluatedText");
const letterCountDisplay = document.getElementById("letterCount");

textarea.addEventListener("input", function() {
  letterCountDisplay.textContent = textarea.value.length;
});