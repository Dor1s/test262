  function foo()
  {
    'use\u0020strict';
     return(this !== undefined);
  }
assert(foo.call(undefined));