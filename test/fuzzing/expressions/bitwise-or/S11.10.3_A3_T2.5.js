if ((true | "1") !== 1) {
  $ERROR('#1: (true | "1") === 1. Actual: ' + ((true | "1")));
}
if (("1" | true) !== 1) {
  $ERROR('#2: ("1" | true) === 1. Actual: ' + (("1" | true)));
}
if ((new Boolean(true) | "1") !== 1) {
  $ERROR('#3: (new Boolean(true) | "1") === 1. Actual: ' + ((new Boolean(true) | "1")));
}
if (("1" | new Boolean(true)) !== 1) {
  $ERROR('#4: ("1" | new Boolean(true)) === 1. Actual: ' + (("1" | new Boolean(true))));
}
if ((true | new String("1")) !== 1) {
  $ERROR('#5: (true | new String("1")) === 1. Actual: ' + ((true | new String("1"))));
}
if ((new String("1") | true) !== 1) {
  $ERROR('#6: (new String("1") | true) === 1. Actual: ' + ((new String("1") | true)));
}
if ((new Boolean(true) | new String("1")) !== 1) {
  $ERROR('#7: (new Boolean(true) | new String("1")) === 1. Actual: ' + ((new Boolean(true) | new String("1"))));
}
if ((new String("1") | new Boolean(true)) !== 1) {
  $ERROR('#8: (new String("1") | new Boolean(true)) === 1. Actual: ' + ((new String("1") | new Boolean(true))));
}