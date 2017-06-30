/*CHECK#1*/
var x = 0;
/*
multi
line
comment
x = 1;
*/
if (x !== 0) {
  $ERROR('#1: var x = 0; /*\\rmulti\\rline\\rcomment\\rx = 1;\\r*/ x === 0. Actual: ' + (x));
}