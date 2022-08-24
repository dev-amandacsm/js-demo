// Import stylesheets
import './style.css';

//Functional programming example (declarative)
function getNumber(inputID) {
  const value = document.getElementById(inputID).value;
  return parseInt(value);
}

function getFunctionalFactorial(n) {
  if (n == 1) return 1;
  else return n * getFunctionalFactorial(n - 1); //call stack
}

function displaySum(value) {
  document.getElementById('func-sum-result').textContent = value;
}

document.getElementById('func-btn').onclick = function handler() {
  const res = getFunctionalFactorial(getNumber('input-n'));
  displaySum(res);
};


//Procedural programming example (imperative)
document.getElementById('proc-sum-btn').onclick = function handler(){
  const value = document.getElementById('input-n').value;
  let n = parseInt(value);
  let res = 1;
  for(let i = 1; i <= n; i++){
    res = res * i;
  }
  document.getElementById('proc-sum-result').textContent = res;
}

//Object oriented programming example
class inputField {
  constructor(id) {
    this.id = id
  }
  getNumber() {
    const value = document.getElementById(this.id).value
    return parseInt(value)
  }
}
class Form {
  static outputField = document.getElementById('oo-sum-result')
  static addNumbers(firstNumber, secondNumber) {
    return firstNumber + secondNumber
  }
  static displaySum(value) {
    this.outputField.textContent = value
  }
}

const firstInput = new inputField('input-n1')
const secondInput = new inputField('input-n2')
document.getElementById('oo-btn').onclick = function handler() {
  const res = Form.addNumbers(firstInput.getNumber(), secondInput.getNumber())
  Form.displaySum(res)
}