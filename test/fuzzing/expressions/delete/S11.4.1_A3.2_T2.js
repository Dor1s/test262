function MyFunction(){};
MyFunction.prop = 1;
if (delete MyFunction.prop !== true) {
  $ERROR('#1: function MyFunction(){}; MyFunction.prop = 1; delete MyFunction.prop === true');
}