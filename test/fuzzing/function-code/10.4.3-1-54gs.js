"use strict";
var o = { get foo() { return this; } }
if (o.foo!==o) {
    throw "'this' had incorrect value!";
}