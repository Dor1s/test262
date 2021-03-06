var yieldSet, C, iter;
function* g() {
  class C_ {
    get [yield]() { return 'get yield'; }
    set [yield](param) { yieldSet = param; }
  }
  C = C_;
}
iter = g();
iter.next();
iter.next('first');
iter.next('second');
assert.sameValue(C.prototype.first, 'get yield');
C.prototype.second = 'set yield';
assert.sameValue(yieldSet, 'set yield');