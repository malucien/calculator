let outputValue = '';

function number(num) {
  outputValue += num;
  document.getElementById('output').value = outputValue;
}

function decimal() {
  if (outputValue.indexOf('.') === -1) {
    outputValue += '.';
    document.getElementById('output').value = outputValue;
  }
}

function clearOutput() {
  outputValue = '';
  document.getElementById('output').value = outputValue;
}

function operator(op) {
  outputValue += op;
  document.getElementById('output').value = outputValue;
}

function calculate() {
  let result = eval(outputValue);
  document.getElementById('output').value = result;
  outputValue = '';
}