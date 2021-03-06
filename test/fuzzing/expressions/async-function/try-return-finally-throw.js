var f = async function() {
  try {
    return "early-return";
  } finally {
    throw "override";
  }
};
f().then($DONE, function(value) {
  assert.sameValue(value, "override", "Exception thrown in finally block");
}).then($DONE, $DONE);