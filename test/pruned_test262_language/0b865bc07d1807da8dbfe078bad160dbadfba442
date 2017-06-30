var evaluated = false;
function f() {
  // Early errors restricting the usage of SuperProperty necessitate the use of
  // `eval`.
  try {
    eval('super[evaluated = true];');
  // Evaluation of SuperProperty is expected to fail in this context, but that
  // behavior is tested elsewhere, so the error is discarded.
  } catch (_) {}
}
f();
assert.sameValue(evaluated, false);