var thisValue = null;
var method = {
  *method() {
    'use strict';
    thisValue = this;
  }
}.method;
method().next();
assert.sameValue(thisValue, undefined);