throw "Test262: This statement should not be evaluated.";
function SwitchTest(value){
  var result = 0;
  
  switch(value) {
    case:
      result += 2;
    default:
      result += 32;
      break;
  }
  
  return result;
}
var x = SwitchTest(0);