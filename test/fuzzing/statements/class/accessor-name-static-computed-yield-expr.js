var yieldSet, C, iter;
function* g() {
  class C_ {
    static get [yield]() { return 'get yield'; }
    static set [yield](param) { yieldSet = param; }
  }
  C = C_;
}
iter = g();
iter.next();
iter.next('first');
iter.next('second');
assert.sameValue(C.first, 'get yield');
C.second = 'set yield';
assert.sameValue(yieldSet, 'set yield');