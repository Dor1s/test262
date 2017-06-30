  function foo()
  {
     "bogus directive";
     "use strict";
     return (this === undefined);
  }
assert(foo.call(undefined));