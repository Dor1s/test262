        var accessed = false;
        var strObj = new String("null");
        for (var i = 0; strObj;) {
            accessed = true;
            break;
        }
assert(accessed, 'accessed !== true');