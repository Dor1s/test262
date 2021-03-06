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
(new Function('tag', 'a', 'b', 'return tag`head${b}tail`;'))(tag, 1, 2);
assert.sameValue(
  previousObject,
  firstObject,
  'The realm\'s template cache is referenced when tagged templates are declared within "new Function" contexts and templated values differ'
);