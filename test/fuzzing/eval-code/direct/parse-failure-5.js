try {
  eval("return;");
  $ERROR('#1.1: return must throw SyntaxError. Actual: ' + (eval("return;")));
} catch(e) {
  if ((e instanceof SyntaxError) !== true) {
    $ERROR('#1.2: return must throw SyntaxError. Actual: ' + (e));
  }  
}
function f() {  eval("return;"); };
try {
  f();      
  $ERROR('#2.1: return must throw SyntaxError. Actual: ' + (f()));
} catch(e) {
  if ((e instanceof SyntaxError) !== true) {
    $ERROR('#2.2: return must throw SyntaxError. Actual: ' + (e));
  }  
}