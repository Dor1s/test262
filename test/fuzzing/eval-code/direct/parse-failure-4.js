try {
  eval("break;");
  $ERROR('#1.1: break must throw SyntaxError. Actual: ' + (eval("break;")));
} catch(e) {
  if ((e instanceof SyntaxError) !== true) {
    $ERROR('#1.2: break must throw SyntaxError. Actual: ' + (e));
  }  
}
try {
  for (var i = 0; i <= 1; i++) {
    for (var j = 0; j <= 1; j++) {
       eval("break;");
    }
  }
  $ERROR('#2.1: break must throw SyntaxError. Actual: ' + (eval("break;")));    
} catch(e) {
  if ((e instanceof SyntaxError) !== true) {   
    $ERROR('#2.2: break must throw SyntaxError. Actual: ' + (e));
  }  
}