if ((true ^ undefined) !== 1) {
  $ERROR('#1: (true ^ undefined) === 1. Actual: ' + ((true ^ undefined)));
}
if ((undefined ^ true) !== 1) {
  $ERROR('#2: (undefined ^ true) === 1. Actual: ' + ((undefined ^ true)));
}
if ((new Boolean(true) ^ undefined) !== 1) {
  $ERROR('#3: (new Boolean(true) ^ undefined) === 1. Actual: ' + ((new Boolean(true) ^ undefined)));
}
if ((undefined ^ new Boolean(true)) !== 1) {
  $ERROR('#4: (undefined ^ new Boolean(true)) === 1. Actual: ' + ((undefined ^ new Boolean(true))));
}