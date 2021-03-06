var f = async function() {
  try {
    throw "early-throw";
  } finally {
    throw "override";
  }
};
f().then($DONE, function(value) {
  assert.sameValue(value, "override", "Exception thrown in finally block");
}).then($DONE, $DONE);