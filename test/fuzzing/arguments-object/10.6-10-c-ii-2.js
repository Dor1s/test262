  function foo(a,b,c)
  {
    arguments[0] = 1; arguments[1] = 'str'; arguments[2] = 2.1;
    if(1 === a && 'str' === b && 2.1 === c)
      return true;   
  }
assert(foo(10,'sss',1), 'foo(10,"sss",1) !== true');