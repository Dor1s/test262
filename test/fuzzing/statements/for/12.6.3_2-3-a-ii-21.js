        var accessed = false;
        for (var i = 0; "1";) {
            accessed = true;
            break;
        }
assert(accessed, 'accessed !== true');