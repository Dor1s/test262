function F() {
  this.af = _ => {
    return this;
  };
}
var usurper = {};
var f = new F();
assert.sameValue(f.af(), f);
assert.sameValue(f.af.apply(usurper), f);
assert.sameValue(f.af.call(usurper), f);
assert.sameValue(f.af.bind(usurper)(), f);