        var accessed = false;
        for (var i = 0; 2;) {
            accessed = true;
            break;
        }
assert(accessed, 'accessed !== true');