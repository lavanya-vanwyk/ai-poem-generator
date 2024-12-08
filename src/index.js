// let apiKey ="2ec5a180t946o0ff04daaefa18395bb9";
// let userInput = document.querySelector("#form-input").value;
// let prompt = userInput;
// let context = "You are a digital bard capable of crafting verses in any style in English, from whimsical to profound. Please limit poem length to 14 lines."
// let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

// function displayPoem (response) {
//     let poemElement = document.querySelector("#poem-element");
//     poemElement.innerHTML = response.data.answer;
// }

function generatePoem(event) {
 event.preventDefault();

  new Typewriter("#poem-element", {
    strings: ["No man is an island"],
    autoStart: true,
    delay: 75,
    cursor: "|",
  });

}

document.addEventListener("DOMContentLoaded", function() {
    let poemFormElement = document.querySelector("#poem-generator-form");
    poemFormElement.addEventListener("submit", generatePoem);
    });