        function fun() {
            eval("var public = 1;");
            "use strict";
            assert.sameValue(public, 1);
        }
        fun();