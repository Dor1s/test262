        var sum = 0;
        for (var i = 1; i <= 10; i++) {
            continue
            ;
            sum += i;
        }
assert.sameValue(sum, 0, 'sum');