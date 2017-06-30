/*CHECK#1*/
var x = 0;
/*
multi
line
comment
x = 1;
*/
if (x !== 0) {
  $ERROR('#1: var x = 0; /*\\nmulti\\nline\\ncomment\\nx = 1;\\n*/ x === 0. Actual: ' + (x));
}