async function f() {
  try {
    throw "early-throw";
  } finally {
    return await new Promise(function(resolve, reject) {
      resolve("override");
    });
  }
}
f().then(function(value) {
  assert.sameValue(value, "override", "Return in finally block");
}).then($DONE, $DONE);