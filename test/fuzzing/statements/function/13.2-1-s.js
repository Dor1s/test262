        var foo = function () {
            this.caller = 12;
        }
        var obj = new foo();
assert.sameValue(obj.caller, 12, 'obj.caller');