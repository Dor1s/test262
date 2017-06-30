        var argObj = function () {
            return arguments;
        } ();
assert(argObj.hasOwnProperty("callee"), 'argObj.hasOwnProperty("callee") !== true');