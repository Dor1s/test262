async function f() {
  try {
    await new Promise(function(resolve, reject) {
      reject("early-reject");
    });
  } finally {
    await new Promise(function(resolve, reject) {
      reject("override");
    });
  }
}
f().then($DONE, function(value) {
  assert.sameValue(value, "override", "Awaited rejection in finally block");
}).then($DONE, $DONE);