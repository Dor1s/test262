try {
  x = 1;
  delete x;
  x;
  $ERROR('#1: x = 1; delete x; x is not exist');
} catch (e) {
  if (e instanceof ReferenceError !== true) {
    $ERROR('#1: x = 1; delete x; x is not exist');
  }
}