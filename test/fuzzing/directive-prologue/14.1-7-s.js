  function foo()
  {
    'Use Strict';
     return (this !== undefined);
  }
assert(foo.call(undefined));