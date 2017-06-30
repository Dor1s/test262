  function foo()
  {
    "use strict" ;
    return (this === undefined);
  }
assert(foo.call(undefined));