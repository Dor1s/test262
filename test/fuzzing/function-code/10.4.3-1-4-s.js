  function foo()
  {
    'use strict';
    return typeof(this);
  }
  function bar()
  {
    return typeof(this);
  }
assert.sameValue(foo.call(true), 'boolean', 'foo.call(true)');
assert.sameValue(bar.call(true), 'object', 'bar.call(true)');