var f = async function() {
  try {
    await new Promise(function(resolve, reject) {
      reject("early-reject");
    });
  } finally {
    return "override";
  }
};
f().then(function(value) {
  assert.sameValue(value, "override", "Return in finally block");
}).then($DONE, $DONE);