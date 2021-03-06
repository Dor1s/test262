var obj = null;
var yield = 'propNameViaIdentifier';
var iter = (function*() {
  obj = {
    [yield]() {}
  };
})();
iter.next();
assert.sameValue(obj, null);
iter.next('propNameViaExpression');
assert.sameValue(
  Object.hasOwnProperty.call(obj, 'propNameViaIdentifier'), false
);
assert.sameValue(
  Object.hasOwnProperty.call(obj, 'propNameViaExpression'), true
);