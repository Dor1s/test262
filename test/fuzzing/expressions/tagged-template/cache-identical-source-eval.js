function tag(templateObject) {
  previousObject = templateObject;
}
var a = 1;
var firstObject = null;
var previousObject = null;
tag`head${a}tail`;
firstObject = previousObject;
assert(firstObject !== null);
previousObject = null;
eval('tag`head${a}tail`');
assert.sameValue(previousObject, firstObject);