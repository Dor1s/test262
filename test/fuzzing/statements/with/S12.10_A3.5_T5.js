this.p1 = 1;
var result = "result";
var myObj = {
    p1: 'a', 
    value: 'myObj_value',
    valueOf : function(){return 'obj_valueOf';}
}
for(var prop in myObj){
    with(myObj){
        break;
        p1 = 'x1';
    }
}
if(p1 !== 1){
  $ERROR('#1: p1 === 1. Actual:  p1 ==='+ p1  );
}
if(myObj.p1 !== "a"){
  $ERROR('#1: myObj.p1 === "a". Actual:  myObj.p1 ==='+ myObj.p1  );
}