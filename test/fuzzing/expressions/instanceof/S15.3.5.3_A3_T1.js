var FACTORY;
FACTORY = Function("this.name=\"root\"");
FACTORY.prototype.type=1;
var instance;
instance = new FACTORY;
if (!(instance instanceof FACTORY)) {
  $ERROR('#1: If O and V refer to the same object or if they refer to objects joined to each other (13.1.2), return true');
}