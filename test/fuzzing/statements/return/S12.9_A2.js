try{
  if (eval("(function(){var x = 1;return\u000Ax;var y=2;})()") !== undefined) {
    $ERROR("#1: LineTerminator(U-000A) between return and Identifier_opt yields return without Identifier_opt");	  
  }
} catch(e){
  $ERROR('#1: eval("(function(){var x = 1;return\\u000Ax;var y=2;})()") does not lead to throwing exception');
}
try{
  if (eval("(function(){var x = 1;return\u000Dx;var y=2;})()") !== undefined) {
    $ERROR("#1: LineTerminator(U-000D) between return and Identifier_opt yields return without Identifier_opt");    
  }
} catch(e){
  $ERROR('#2: eval("(function(){var x = 1;return\\u000Dx;var y=2;})()") does not lead to throwing exception');
}
try{
  if (eval("(function(){var x = 1;return\u2028x;var y=2;})()") !== undefined) {
    $ERROR("#1: LineTerminator(U-2028) between return and Identifier_opt yields return without Identifier_opt");    
  }
} catch(e){
  $ERROR('#3: eval("(function(){var x = 1;return\\u2028x;var y=2;})()") does not lead to throwing exception');
}
try{
  if (eval("(function(){var x =1;return\u2029x;var y=2;})()") !== undefined) {
    $ERROR("#1: LineTerminator(U-2029) between return and Identifier_opt yields return without Identifier_opt");    
  }
} catch(e){
  $ERROR('#4: eval("(function(){var x =1;return\\u2029x;var y=2;})()") does not lead to throwing exception');
}