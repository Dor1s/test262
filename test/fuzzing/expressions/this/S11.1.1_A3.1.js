function ReturnThis() {return this}
if (ReturnThis() !== this) {
  $ERROR('#1: function ReturnThis() {return this} ReturnThis() === this. Actual: ' + (ReturnThis()));
}
function ReturnEvalThis() {return eval("this")}
if (ReturnEvalThis() !== this) {
  $ERROR('#2: function ReturnEvalThis() {return eval("this")} ReturnEvalThis() === this. Actual: ' + (ReturnEvalThis()));
}