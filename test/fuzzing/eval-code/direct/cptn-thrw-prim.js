try {
  eval("throw 1;");
  $ERROR('#1.1: throw 1 must throw SyntaxError. Actual: ' + (eval("throw 1;")));
} catch(e) {
  if (e !== 1) {
    $ERROR('#1.2: throw 1 must throw SyntaxError. Actual: ' + (e));
  }  
}