const billInput = document.getElementById("billInput");
const tipInput = document.getElementById("tipInput");
const result = document.getElementById("result");
const button = document.getElementById("calculateBtn");
 
button.addEventListener("click", function () {
  const bill = parseFloat(billInput.value);
  const tipPercent = parseFloat(tipInput.value);

  if (isNaN(bill) || isNaN(tipPercent)) {
    result.textContent = "Please enter valid numbers.";
    return;
  }

  const tip = bill * (tipPercent / 100);
  const total = bill + tip;

  result.textContent = `Tip: RM${tip.toFixed(2)} | Total: RM${total.toFixed(2)}`;
});

if(billInput.value == "" || tipInput.value == ""){
    button.disabled = true
}
 
 billInput.addEventListener("keyup", function(){
  //Bonus Challenge 1
  if(billInput.value == "" || tipInput.value == ""){
    button.disabled = true
  }else{
    button.disabled = false
    // Bonus Challenge 3
    calculateAndShowTotal()
  }
})

// Bonus Challenge 3
function calculateAndShowTotal(){
  //Actually Code inside here is the same as Line 7 to Line 18
  const bill = parseFloat(billInput.value);
  const tipPercent = parseFloat(tipInput.value);

  // if (isNaN(bill) || isNaN(tipPercent)) {
  //   result.textContent = "Please enter valid numbers.";
  //   return;
  // }

  const tip = bill * (tipPercent / 100);
  const total = bill + tip;

  result.textContent = `Tip: RM${tip.toFixed(2)} | Total: RM${total.toFixed(2)}`;
}