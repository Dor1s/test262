        var argObj = function () {
            return arguments;
        } ();
        var verifyEnumerable = false;
        for (var _10_6_14_c_1 in argObj) {
            if (argObj.hasOwnProperty(_10_6_14_c_1) && _10_6_14_c_1 === "callee") {
                verifyEnumerable = true;
            }
        }
assert.sameValue(verifyEnumerable, false, 'verifyEnumerable');
assert(argObj.hasOwnProperty("callee"), 'argObj.hasOwnProperty("callee") !== true');