function MyFunction(){};
MyFunction.prop = 1;
delete MyFunction.prop;
if (MyFunction.prop !== undefined) {
  $ERROR('#1: function MyFunction(){}; MyFunction.prop = 1; delete MyFunction.prop; MyFunction.prop === undefined. Actual: ' + (MyFunction.prop));
}