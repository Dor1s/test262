  function foo()
  {
    'use strict';
    return typeof(this);
  }
  function bar()
  {
    return typeof(this);
  }
assert.sameValue(foo.call(undefined), 'undefined', 'foo.call(undefined)');
assert.sameValue(bar.call(), 'object', 'bar.call()');