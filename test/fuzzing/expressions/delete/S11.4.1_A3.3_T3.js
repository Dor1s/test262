function MyFunction(){};
var MyObjectVar = new MyFunction();
MyObjectVar.prop = 1;
delete MyObjectVar.prop;
if (MyObjectVar.prop !== undefined) {
  $ERROR('#1: function MyFunction(){}; var MyObjectVar = new MyFunction(); MyFunction.prop = 1; delete MyObjectVar.prop; MyObjectVar.prop === undefined. Actual: ' + (MyObjectVar.prop));
}