function tag(templateObject) {
  previousObject = templateObject;
}
var a = 1;
var b = 2;
var firstObject = null;
var previousObject = null;
tag`head${a}tail`;
firstObject = previousObject;
assert(firstObject !== null);
previousObject = null;
tag`head${b}tail`;
assert.sameValue(previousObject, firstObject);