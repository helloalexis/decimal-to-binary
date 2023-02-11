const container = document.getElementById("container");
let pTag = document.createElement("p");
let item = document.createElement("div");
let brTag = document.createElement("br");

const userInput = document.getElementById("user-input");

function newConvertToBinary(text) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let startNum = alphabet.indexOf(text[0].toUpperCase()) + 10;
  let divResult = [startNum];
  let output = [];
  let result = [];
  let combined = [];
  let letters = [];

  for (let i = 0; i < text.length; i++) {
    startNum = alphabet.indexOf(text[i].toUpperCase()) + 10;
    divResult = [startNum];

    while (true) {
      if (divResult[divResult.length - 1] > 0) {
        if (divResult[divResult.length - 1] % 2 === 0) {
          output += 0;
        } else {
          output += 1;
        }
        divResult.push(Math.floor(divResult[divResult.length - 1] / 2));
      } else {
        for (let j = output.length - 1; j > -1; j--) {
          result += output[j];
        }
        divResult = [];
        output = [];
        combined.push(result);
        letters.push(text[i].toUpperCase());
        result = [];
        break;
      }
    }
  }

  for (let i = 0; i < letters.length; i++) {
    pTag = document.createElement("p");
    if (letters[i] != " ") {
      item = document.createElement("div");
      pTag.textContent = `${letters[i]}: ${combined[i]}`;
      item.className = "item";
      item.appendChild(pTag);
    }
    container.appendChild(item);
  }
}

function initConvertion() {
  while (container.childNodes.length > 0) {
    container.removeChild(container.lastChild);
  }

  newConvertToBinary(userInput.value);
  userInput.value = "";
}
