var my_eval = eval;
if (my_eval("this") !== this) {
    throw "'this' had incorrect value!";
}