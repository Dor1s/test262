        var accessed = false;
        var obj1 = {
            valueOf: function () {
                accessed = true;
                return 3;
            }
        };
        var obj2 = {
            valueOf: function () {
                if (accessed === true) {
                    return 4;
                } else {
                    return 2;
                }
            }
        };
assert(!(obj1 > obj2), '!(obj1 > obj2) !== true');