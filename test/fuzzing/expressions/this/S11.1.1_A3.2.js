function SetThis() {this.THIS = this}
if ((new SetThis()).THIS.toString() !== "[object Object]") {
  $ERROR('#1: function SetThis() {this.THIS = this} (new SetThis()).THIS.toString() !== "[object Object]". Actual: ' + ((new SetThis()).THIS.toString()));
}
function SetEvalThis() {this.THIS = eval("this")}
if ((new SetEvalThis()).THIS.toString() !== "[object Object]") {
  $ERROR('#2: function SetEvalThis() {this.THIS = eval("this")} (new SetEvalThis()).THIS.toString() !== "[object Object]". Actual: ' + ((new SetEvalThis()).THIS.toString()));
}