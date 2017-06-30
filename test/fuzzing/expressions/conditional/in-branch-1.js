var cond1Count = 0;
var cond2Count = 0;
var cond1 = function() {
  cond1Count += 1;
  return {};
};
var cond2 = function() {
  cond2Count += 1;
};
for (true ? '' in cond1() : cond2(); false; ) ;
assert.sameValue(cond1Count, 1);
assert.sameValue(cond2Count, 0);