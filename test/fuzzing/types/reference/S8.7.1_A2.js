var y = 1;
var result = delete y;
if(result){
  $ERROR('#1: y = 1; (delete y) === false. Actual: ' + result);
};
if (y !== 1) {
  $ERROR('#2: y = 1; delete y; y === 1. Actual: ' + (y));
}