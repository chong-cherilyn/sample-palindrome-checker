const result = document.getElementById("result");
const button = document.getElementById("check-btn");
const text = document.getElementById("text-input");

function palindromeCheck(result, text) {
  let input = text.value;

  if (input == "") {
    // Display alert if user input is blank
    alert("Please input a value");
  }

  else {
    var punctuation = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g;
    var spaceCharacter = /\s/g;

    // Create a forward string for comparison
    function inputString(input, punctuation, spaceCharacter) {
      return input.toLowerCase().replace(punctuation, "").replace(spaceCharacter, "").split("").join("");
    }
    const forwardString = inputString(input, punctuation, spaceCharacter);

    // Create a backward string for comparison
    function reverseString(input, punctuation, spaceCharacter) {
      return input.toLowerCase().replace(punctuation, "").replace(spaceCharacter, "").split("").reverse().join("");
    }
    const backwardString = reverseString(input, punctuation, spaceCharacter);
    // Compare the strings and display a result
    if (forwardString == backwardString) {
      result.innerText = `${input} is a palindrome`;
      result.removeAttribute("hidden");
    }
    else {
      result.innerText = `${input} is not a palindrome`;
      result.removeAttribute("hidden");
    }
  }
}

button.addEventListener("click", () => palindromeCheck(result, text));
text.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    button.click();
    palindromeCheck(result, text);
  }
});

addEventListener("input", () => result.addAttribute("hidden"));