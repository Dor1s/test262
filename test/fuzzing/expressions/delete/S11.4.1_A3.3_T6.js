function MyFunction(){};
var MyObjectVar = new MyFunction();
if (delete MyObjectNotVar !== true) {
  $ERROR('#1: function MyFunction(){}; var MyObjectNotVar = new MyFunction(); delete MyObjectNotVar === true');
}