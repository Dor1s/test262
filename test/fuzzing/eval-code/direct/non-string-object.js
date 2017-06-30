var x = {};
if (eval(x) !== x) {
  $ERROR('#1: x = {}; eval(x) === x. Actual: ' + (eval(x)));
}
x = new Number(1);
if (eval(x) !== x) {
  $ERROR('#2: x = new Number(1); eval(x) === x. Actual: ' + (eval(x)));
}
x = new Boolean(true);
if (eval(x) !== x) {
  $ERROR('#3: x = new Boolean(true); eval(x) === x. Actual: ' + (eval(x)));
}
x = new String("1+1");
if (eval(x) !== x) {
  $ERROR('#4: x = new String("1"); eval(x) === x. Actual: ' + (eval(x)));
}