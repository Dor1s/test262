var x = {};
var y;
if (eval("y = x") !== x) {
  $ERROR('#1: var x = {}; eval("y = x") === x. Actual: ' + (eval("y = x")));
}    
if (eval("x") !== x) {
  $ERROR('#2: var x = {}; eval("x") === x. Actual: ' + (eval("x")));
}