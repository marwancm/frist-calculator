const calcContainer = document.querySelector('.calc-container');
const displayArea = document.querySelector('.display-area');

calcContainer.addEventListener('click', e => {
  if (e.target.nodeName == 'BUTTON') {
    switch (e.target.textContent) {
      case "C":
        clear();
        break;
      case "DEL":
        deletOnValue();
        break;
      case "=":
        evaluate();
        break;
      default: 
        addToDisplayArea(e.target.textContent);
    }
  }
});



function clear() {
  displayArea.textContent = '';
}

function addToDisplayArea(value){
  displayArea.textContent = displayArea.textContent + value;
}

function deletOnValue() {
  let currentContent = displayArea.textContent;
  displayArea.textContent = currentContent.substring(0, currentContent.length - 1);
}

function evaluate() {
  try{
    let calculation  = math.evaluate(displayArea.textContent);
    displayArea.textContent = calculation
  } catch (error) {
    displayArea.textContent = "Invalid operation";
    console.log(error);
  }
}