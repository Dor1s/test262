            Object.defineProperty(Array.prototype, "1", {
                value: 100,
                writable: false,
                configurable: true
            });
            var arr = [101, 12];
assert(arr.hasOwnProperty("1"), 'arr.hasOwnProperty("1") !== true');
assert.sameValue(arr[1], 12, 'arr[1]');