  function foo(a,b,c)
  {
    a = 1; b = 'str'; c = 2.1;
    return (arguments[0] === 10 && arguments[1] === 'sss' && arguments[2] === 1);
  }
assert(foo(10, 'sss', 1), 'foo(10, "sss", 1) !== true');