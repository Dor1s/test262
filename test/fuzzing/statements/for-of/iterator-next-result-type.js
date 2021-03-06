var iterable = {};
var firstIterResult;
iterable[Symbol.iterator] = function() {
  var finalIterResult = { value: null, done: true };
  var nextIterResult = firstIterResult;
  return {
    next: function() {
      var iterResult = nextIterResult;
      nextIterResult = finalIterResult;
      return iterResult;
    }
  };
};
firstIterResult = true;
assert.throws(TypeError, function() {
  for (var x of iterable) {}
});
firstIterResult = false;
assert.throws(TypeError, function() {
  for (var x of iterable) {}
});
firstIterResult = 'string';
assert.throws(TypeError, function() {
  for (var x of iterable) {}
});
firstIterResult = undefined;
assert.throws(TypeError, function() {
  for (var x of iterable) {}
});
firstIterResult = null;
assert.throws(TypeError, function() {
  for (var x of iterable) {}
});
firstIterResult = 4;
assert.throws(TypeError, function() {
  for (var x of iterable) {}
});
firstIterResult = NaN;
assert.throws(TypeError, function() {
  for (var x of iterable) {}
});
firstIterResult = Symbol('s');
assert.throws(TypeError, function() {
  for (var x of iterable) {}
});
firstIterResult = /regexp/;
for (var x of iterable) {}
firstIterResult = {};
for (var x of iterable) {}
firstIterResult = new Proxy({}, {
  get: function(receiver, name) {
    if (name === 'done') {
      return true;
    }
    if (name === 'value') {
      return null;
    }
    $ERROR('This code is unreachable.');
  }
});
for (var x of iterable) {
  $ERROR('This code is unreachable.');
}
firstIterResult = new Proxy({}, {
  get: function(receiver, name) {
    if (name === 'done') {
      return false;
    }
    if (name === 'value') {
      return 23;
    }
    $ERROR('This code is unreachable.');
  }
});
var i = 0;
for (var x of iterable) {
  assert.sameValue(x, 23);
  i++;
}
assert.sameValue(i, 1);