//changed background to a darker theme
const body = document.querySelector("body");
body.style.backgroundColor = "#0e1118";
body.style.color = "white";

//queried encode, translate, madlib, and search buttons
const encodeButton = document.querySelector("#encode");
const translateButton = document.querySelector("#translate");
const madlibButton = document.querySelector("#madlib");
const searchButton = document.querySelector("#search");

//queried submit button
const submit = document.querySelector("#submit-button");

//added event listener to submit button and added all respective code depending on what is the value of the input and what radio button is selected
submit.addEventListener("click", function () {
  //queried input text box
  const box = document.querySelector("#translator-input");

  //created a variable for the value of the input text box
  const boxValue = box.value;

  //queried bottom section with result output
  const result1 = document.querySelector("#results");

  result1.innerText = encode(boxValue);

  let searchObj = search(boxValue);

  //queried all radio buttons
  const radios = document.querySelectorAll('[type="radio"]');

  //loops through radio button and if button is checked, executes given function
  for (const button of radios) {
    if (button.checked === true) {
      console.log(button.value);
      if (button.value === "encode") {
        result1.innerText = encode(boxValue);
      } else if (button.value === "translate") {
        result1.innerText = translate(boxValue);
      } else if (button.value === "madlib") {
        result1.innerText = madlib(boxValue);
      } else if (button.value === "search") {
        result1.innerText = "";
        for (const value of searchObj) {
          console.log(value.symbol);
          console.log(search(boxValue));
          if (boxValue === "") {
            console.log("NO EMOJIS WERE FOUND");
            result1.innerHTML = "NO EMOJIS WERE FOUND";
          } else {
            const paragraph = document.createElement("p");
            paragraph.innerText = value.symbol;
            result1.appendChild(paragraph);
          }
        }
      } else if (button.value === "random") {
        console.log(`${button.value} WAS PRESSED`);
        result1.innerHTML = Math.floor(Math.random() * 4).toFixed(0);
        if (result1.innerText == 0) {
          encodeButton.click();
          submit.click();
        } else if (result1.innerText == 1) {
          translateButton.click();
          submit.click();
        } else if (result1.innerText == 2) {
          madlibButton.click();
          submit.click();
        } else if (result1.innerText == 3) {
          searchButton.click();
          submit.click();
        }
        return result1;
      }
    }
  }
});
