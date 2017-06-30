  function foo()
  {
    'use strict';
    return typeof(this);
  } 
  function bar()
  {
    return typeof(this);
  }
  function foobar()
  {
  }
assert.sameValue(foo.call(foobar), 'function', 'foo.call(foobar)');
assert.sameValue(bar.call(foobar), 'function', 'bar.call(foobar)');