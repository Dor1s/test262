if (isNaN(Number.POSITIVE_INFINITY - Number.POSITIVE_INFINITY) !== true ) {
  $ERROR('#1: Infinity - Infinity === Not-a-Number. Actual: ' + (Infinity - Infinity));
}
if (isNaN(Number.NEGATIVE_INFINITY - Number.NEGATIVE_INFINITY) !== true ) {
  $ERROR('#2: -Infinity - -Infinity === Not-a-Number. Actual: ' + (-Infinity - -Infinity));
}