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
tag`head${a}tail`;
assert.sameValue(
  previousObject,
  firstObject,
  'The realm\'s template cache is used when tagged templates are executed in the source code directly'
);