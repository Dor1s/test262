        function fun() {
            eval("var public = 1;");
            assert.sameValue(public, 1);
            "use strict";
        }
        fun();