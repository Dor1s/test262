  function foo()
  {
    'use strict';
    return typeof(this);
  }
  function bar()
  {
    return typeof(this);
  }
assert.sameValue(foo.call(1), 'number', 'foo.call(1)');
assert.sameValue(bar.call(1), 'object', 'bar.call(1)');