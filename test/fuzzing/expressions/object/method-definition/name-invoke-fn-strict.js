var thisValue = null;
var method = {
  method() {
    'use strict';
    thisValue = this;
  }
}.method;
method();
assert.sameValue(thisValue, undefined);