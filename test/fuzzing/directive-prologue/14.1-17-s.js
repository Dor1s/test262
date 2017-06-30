  function foo()
  {
    var x;
    'use strict';
    return (this !== undefined);
  }
assert(foo.call(undefined));