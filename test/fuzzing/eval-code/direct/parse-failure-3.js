try {
  eval("continue;");
  $ERROR('#1.1: continue must throw SyntaxError. Actual: ' + (eval("continue;")));
} catch(e) {
  if ((e instanceof SyntaxError) !== true) {
    $ERROR('#1.2: continue must throw SyntaxError. Actual ' + (e));
  }  
}
try {
  for (var i = 0; i <= 1; i++) {
    for (var j = 0; j <= 1; j++) {
       eval("continue;");       
    }
  }
  $ERROR('#2.1: continue must throw SyntaxError. Actual: ' + (eval("continue;")));    
} catch(e) {
  if ((e instanceof SyntaxError) !== true) {
    $ERROR('#2.2: continue must throw SyntaxError. Actual: ' + (e));
  }  
}