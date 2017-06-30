  function foo()
  {
    "another directive"
    "use strict" ;
    return (this === undefined);
  }
assert(foo.call(undefined));