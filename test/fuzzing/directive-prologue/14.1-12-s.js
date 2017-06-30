  function foo()
  {
     "use strict";    /* comment */   // comment
     return (this === undefined);
  }
assert(foo.call(undefined));