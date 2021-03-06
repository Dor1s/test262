var evaluatedArg = false;
var caught;
class C extends Object {
  constructor() {
    try {
      super(evaluatedArg = true);
    } catch (err) {
      caught = err;
    }
  }
}
Object.setPrototypeOf(C, parseInt);
try {
  new C();
} catch (_) {}
assert.sameValue(typeof caught, 'object');
assert.sameValue(caught.constructor, TypeError);
assert.sameValue(
  evaluatedArg, false, 'did not perform ArgumentsListEvaluation'
);