  function foo(a,b,c)
  {
    a = 1; b = 'str'; c = 2.1;
    if(arguments[0] === 1 && arguments[1] === 'str' && arguments[2] === 2.1)
      return true;   
  }
assert(foo(10,'sss',1), 'foo(10,"sss",1) !== true');