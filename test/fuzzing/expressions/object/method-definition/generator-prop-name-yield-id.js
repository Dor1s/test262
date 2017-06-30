var yield = 'propName';
var obj = {
  *[yield]() {}
};
assert.sameValue(Object.hasOwnProperty.call(obj, 'propName'), true);