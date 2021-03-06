var capture = [];
var leftValue = { valueOf() { capture.push("leftValue"); return 3; }};
var rightValue = { valueOf() { capture.push("rightValue"); return 2; }};
(capture.push("left"), leftValue) ** (capture.push("right"), rightValue);
assert.sameValue(capture[0], "left", "Expected the 1st element captured to be 'left'");
assert.sameValue(capture[1], "right", "Expected the 2nd element captured to be 'right'");
assert.sameValue(capture[2], "leftValue", "Expected the 3rd element captured to be 'leftValue'");
assert.sameValue(capture[3], "rightValue", "Expected the 4th element captured to be 'rightValue'");