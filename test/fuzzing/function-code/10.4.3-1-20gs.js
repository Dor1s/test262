var my_eval = eval;
if (my_eval("\"use strict\";\nthis") !== this ) {
    throw "'this' had incorrect value!";
}