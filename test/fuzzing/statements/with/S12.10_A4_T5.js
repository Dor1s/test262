this.p1 = 'a';
var myObj = {
  p1: [1,2,3], 
}
eval("with(myObj){p1=[3,2,1]}");
if(myObj.p1[2] !== 1){
  $ERROR('#1: myObj.p1[2] === 1. Actual:  myObj.p1[2] ==='+ myObj.p1[2]  );
}
if(myObj.p1 === 'a'){
  $ERROR('#2: myObj.p1 !== \'a\'');
}