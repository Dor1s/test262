var arrowFn = () => {};
assert.sameValue(arrowFn.hasOwnProperty('caller'), false, 'Functions created using ArrowFunction syntactic form do not have own property "caller"');
assert.sameValue(arrowFn.hasOwnProperty('arguments'), false, 'Functions created using ArrowFunction syntactic form do not have own property "arguments"');
assert.throws(TypeError, function() {
  return arrowFn.caller;
});
assert.throws(TypeError, function() {
  arrowFn.caller = {};
});
assert.throws(TypeError, function() {
  return arrowFn.arguments;
});
assert.throws(TypeError, function() {
  arrowFn.arguments = {};
});