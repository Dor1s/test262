function Base() {}
Base.prototype = {
  set constructor(_) {
    $ERROR("`Base.prototype.constructor` is unreachable.");
  }
};
class C extends Base {}
new C();