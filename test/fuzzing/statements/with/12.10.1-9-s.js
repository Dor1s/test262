assert.throws(SyntaxError, function() {
    eval("\
          var f = function () {\
                \'use strict\';\
                var o = {}; \
                with (o) {}; \
              }\
        ");
});