  function foo()
  {
     "use strict";
     "bogus directive";
     return (this === undefined);
  }
assert(foo.call(undefined));