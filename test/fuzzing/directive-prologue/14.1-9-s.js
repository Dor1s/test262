  function foo()
  {
     'use strict';
     "use strict";
     return (this === undefined);
  }
assert(foo.call(undefined));