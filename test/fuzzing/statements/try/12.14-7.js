      var o = {foo: 1};
      var catchAccessed = false;
      
      try {
        throw o;
      }
      catch (expObj) {
        catchAccessed = (expObj.foo == 1);
      }
      assert(catchAccessed, '(expObj.foo == 1)');
      catchAccessed = false;
      try {
        expObj;
      }
      catch (e) {
        catchAccessed = e instanceof ReferenceError
      }
      assert(catchAccessed, 'e instanceof ReferenceError');