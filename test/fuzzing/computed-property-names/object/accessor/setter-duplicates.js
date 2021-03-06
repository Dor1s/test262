var calls = 0;
var A = {
  set ['a'](_) {
    calls++;
  }
};
A.a = 'A';
assert.sameValue(calls, 1, "The value of `calls` is `1`");
calls = 0;
var B = {
  set b(_) {
    $ERROR("The `b` setter definition in `B` is unreachable");
  },
  set ['b'](_) {
    calls++;
  }
};
B.b = 'B';
assert.sameValue(calls, 1, "The value of `calls` is `1`");
calls = 0;
var C = {
  set c(_) {
    $ERROR("The `c` setter definition in `C` is unreachable");
  },
  set ['c'](_) {
    $ERROR("The first `['c']` setter definition in `C` is unreachable");
  },
  set ['c'](_) {
    calls++
  }
};
C.c = 'C';
assert.sameValue(calls, 1, "The value of `calls` is `1`");
calls = 0;
var D = {
  set ['d'](_) {
    $ERROR("The `['d']` setter definition in `D` is unreachable");
  },
  set d(_) {
    calls++
  }
};
D.d = 'D';
assert.sameValue(calls, 1, "The value of `calls` is `1`");