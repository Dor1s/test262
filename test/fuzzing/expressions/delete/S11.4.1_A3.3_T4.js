function MyFunction(){};
var MyObjectVar = new MyFunction();
if (delete MyObjectVar !== false) {
  $ERROR('#1: function MyFunction(){}; var MyObjectVar = new MyFunction(); delete MyObjectVar === false');
}