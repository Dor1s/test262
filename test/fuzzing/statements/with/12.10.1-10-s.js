  // wrapping it in eval since this needs to be a syntax error. The
  // exception thrown must be a SyntaxError exception. Note that eval
  // inherits the strictness of its calling context.  
assert.throws(SyntaxError, function() {
    eval("\
          var o = {};\
          with (o) {}\
       ");
});