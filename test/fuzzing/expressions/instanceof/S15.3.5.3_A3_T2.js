var FAKEFACTORY;
FAKEFACTORY = Function();
var fakeinstance;
fakeinstance = {};
if (fakeinstance instanceof FAKEFACTORY) {
  $ERROR('#1: If O and V refer to the same object or if they refer to objects joined to each other (13.1.2), return true');
}
FAKEFACTORY.prototype=Object.prototype;
if (!(fakeinstance instanceof FAKEFACTORY)) {
  $ERROR('#2: If O and V refer to the same object or if they refer to objects joined to each other (13.1.2), return true');
}