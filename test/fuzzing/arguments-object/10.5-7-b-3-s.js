        function _10_5_7_b_3_fun() {
            arguments[1] = 12;
            return arguments[0] === 30 && arguments[1] === 12;
        };
assert(_10_5_7_b_3_fun(30), '_10_5_7_b_3_fun(30) !== true');