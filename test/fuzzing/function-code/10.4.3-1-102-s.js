var x = 3;
assert.sameValue("ab".replace("b", (function () {
                                "use strict";
                                return function () {
                                    x = this;
                                    return "a";
                                }
                           })()), "aa");
assert.sameValue(x, undefined, 'x');