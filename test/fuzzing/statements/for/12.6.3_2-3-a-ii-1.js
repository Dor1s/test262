        var accessed = false;
        var obj = { value: false };
        for (var i = 0; obj; ) {
            accessed = true;
            break;
        }
assert(accessed, 'accessed !== true');