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
(new Function('tag', 'a', 'b', 'return tag`head${b}tail`;'))(tag, 1, 2);
assert.sameValue(previousObject, firstObject);