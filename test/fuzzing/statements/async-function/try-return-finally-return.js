async function f() {
  try {
    return "early-return";
  } finally {
    return await new Promise(function(resolve, reject) {
      resolve("override");
    });
  }
}
f().then(function(value) {
  assert.sameValue(value, "override", "Return in finally block");
}).then($DONE, $DONE);