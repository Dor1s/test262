var FACTORY;
FACTORY = new Function;
FACTORY.prototype = undefined;
var obj;
obj={};
try {
  obj instanceof  FACTORY;
  $ERROR('#1: O is not an object, throw a TypeError exception');
} catch (e) {
  if (!(e instanceof TypeError)) {
  	$ERROR('#1.1: O is not an object, throw a TypeError exception');
  }
}