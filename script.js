function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculateResult() 
  {
   
    document.getElementById('display').value = eval(document.getElementById('display').value);
    
  }
// ... (previous functions) ...

function deleteLastCharacter() {
    let currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
  }