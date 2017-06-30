var previousObject = null;
var firstObject = null;
function tag(templateObject) {
  previousObject = templateObject;
}
tag`\uc548\ub155`;
assert(previousObject !== null);
firstObject = previousObject;
previousObject = null;
tag`안녕`;
assert(previousObject !== null);
assert(firstObject !== previousObject);