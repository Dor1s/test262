        var foo = function () {
            this.arguments = 12;
        } 
        var obj = new foo();
assert.sameValue(obj.arguments, 12, 'obj.arguments');