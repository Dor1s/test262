        var accessed = false;
        var numObj = new Number(12);
        for (var i = 0; numObj;) {
            accessed = true;
            break;
        }
assert(accessed, 'accessed !== true');