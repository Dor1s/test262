throw "Test262: This statement should not be evaluated.";
try {
  throw 
  1;
} catch(e) {  
}  
$ERROR('#1: Check throw statement for automatic semicolon insertion');