var FACTORY;
FACTORY = new Function;
FACTORY.prototype = "error";
try {
  ( function() {
  }) instanceof FACTORY;
  $ERROR('#1: O is not an object, throw a TypeError exception');
} catch (e) {
  if (!(e instanceof TypeError)) {
    $ERROR('#1.1: O is not an object, throw a TypeError exception');
  }
}