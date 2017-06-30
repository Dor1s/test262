var method = { method() {} }.method;
assert.sameValue(Object.hasOwnProperty.call(method, 'prototype'), false);