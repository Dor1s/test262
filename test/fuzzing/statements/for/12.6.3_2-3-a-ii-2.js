        var accessed = false;
        var boolObj = new Boolean(false);
        for (var i = 0; boolObj;) {
            accessed = true;
            break;
        }
assert(accessed, 'accessed !== true');