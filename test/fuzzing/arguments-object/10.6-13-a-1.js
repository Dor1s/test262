            Object.defineProperty(Object.prototype, "callee", {
                value: 1,
                writable: false,
                configurable: true
            });
            var argObj = (function () { return arguments })();
            var verifyValue = false;
            verifyValue = typeof argObj.callee === "function";
            
            var verifyWritable = false;
            argObj.callee = 1001;
            verifyWritable = (argObj.callee === 1001);
            var verifyEnumerable = false;
            for (var p in argObj) {
                if (p === "callee" && argObj.hasOwnProperty("callee")) {
                    verifyEnumerable = true;
                }
            }
            var verifyConfigurable = false;
            delete argObj.callee;
            verifyConfigurable = argObj.hasOwnProperty("callee");
assert(verifyValue, 'verifyValue !== true');
assert(verifyWritable, 'verifyWritable !== true');
assert.sameValue(verifyEnumerable, false, 'verifyEnumerable');
assert.sameValue(verifyConfigurable, false, 'verifyConfigurable');