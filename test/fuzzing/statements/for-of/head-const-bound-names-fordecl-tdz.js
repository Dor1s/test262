assert.throws(ReferenceError, function() {
  let x = 1;
  for (const x of [x]) {}
});