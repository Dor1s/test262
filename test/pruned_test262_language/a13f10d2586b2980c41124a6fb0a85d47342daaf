  function foo(a,b) {
  
    // Now, deleting 'a' directly should fail
    // because 'a' is direct reference to a function argument;
    var d = delete a;
    return (d === false && a === 1);
  }
assert(foo(1,2), 'foo(1,2) !== true');