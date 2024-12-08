//generatePoem function makes API call to get data. function is called when form is submitted.
function generatePoem (event) {
    event.preventDefault();
    let apiKey ="2ec5a180t946o0ff04daaefa18395bb9";
    let userInput = document.querySelector("#form-input");
    let prompt = `User instructions: Generate a poem about ${userInput.value}`;
    let context = "You are a digital bard capable of crafting verses in any style in English, from whimsical to profound. Please limit poem length to 14 lines, in basic HTML and separate each line with a <br />. Do not include a title to the poem. Sign the poem with 'by SheCodes AI' inside a <strong> element at the end of the poem."
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElement = document.querySelector("#poem-element");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = 
    `<div class="generating-container">
        <div class="loader-container">
            <div class="loader-wrap">
                <div class="loader">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>`;

    axios.get(apiURL).then(displayPoem);
}
//displayPoem uses API response data with typewriter plugin to display poem.
function displayPoem(response) {
  new Typewriter("#poem-element", {
    strings: response.data.answer,
    autoStart: true,
    delay: 75,
    cursor: "|",
  });

}

document.addEventListener("DOMContentLoaded", function() {
    let poemFormElement = document.querySelector("#poem-generator-form");
    poemFormElement.addEventListener("submit", generatePoem);
    });