  function foo(a,b)
  {
    var d = delete arguments[0];
    return (d === true && arguments[0] === undefined);  
  }
assert.sameValue(foo(1,2), true, 'foo(1,2)');