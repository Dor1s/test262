var ownProperties = Object.getOwnPropertyNames(function*() {}.prototype);
assert.sameValue(ownProperties.length, 0);