function MyFunction(){};
MyObjectNotVar = new MyFunction();
MyObjectNotVar.prop = 1;
delete MyObjectNotVar.prop;
if (MyObjectNotVar.prop !== undefined) {
  $ERROR('#1: function MyFunction(){}; MyObjectNotVar = new MyFunction(); MyFunction.prop = 1; delete MyObjectNotVar.prop; MyObjectNotVar.prop === undefined. Actual: ' + (MyObjectNotVar.prop));
}