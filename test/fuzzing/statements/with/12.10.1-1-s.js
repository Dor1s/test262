assert.throws(SyntaxError, function() {
    // wrapping it in eval since this needs to be a syntax error. The
    // exception thrown must be a SyntaxError exception.
    eval("\
          function f() {\
            \'use strict\';\
            var o = {}; \
            with (o) {};\
          }\
        ");
});