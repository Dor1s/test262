if (typeof (x) !== "undefined") {
  $ERROR('#1: typeof (x) === "undefined". Actual: ' + (typeof (x)));
}
var object = {};
if (delete (object.prop) !== true) {
  $ERROR('#2: var object = {}; delete (object.prop) === true');
}
if (typeof (object.prop) !== "undefined") {
  $ERROR('#3: var object = {}; typeof (object.prop) === "undefined". Actual: ' + (typeof (object.prop)));
}