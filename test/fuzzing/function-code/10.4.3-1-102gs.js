var x = 3;
if ( ("ab".replace("b", (function () { 
                                "use strict";
                                return function () {
                                    x = this;
                                    return "a";
                                }
                           })())!=="aa") || (x!==undefined)) {
     throw "'this' had incorrect value!";
}