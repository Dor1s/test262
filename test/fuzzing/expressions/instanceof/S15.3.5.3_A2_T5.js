var FACTORY;
FACTORY = Function("this.prop=1;");
FACTORY.prototype.name = "fairy";
var instance;
instance = new FACTORY;
FACTORY.prototype = void 0;
try {
  instance instanceof FACTORY;
  $ERROR('#1: O is not an object, throw a TypeError exception');
} catch (e) {
  if (!(e instanceof TypeError)) {
    $ERROR('#1.1: O is not an object, throw a TypeError exception');
  }
}
if ((instance.constructor !== FACTORY) || (instance.name !== "fairy")) {
  $ERROR('#2: instance.constructor === FACTORY');
}