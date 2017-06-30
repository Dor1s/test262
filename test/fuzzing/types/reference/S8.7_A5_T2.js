if (typeof(__ref) !== "undefined"){
    $ERROR('#1: typeof(__ref) === "undefined". Actual: ' + (typeof(__ref)));  
}; 
var obj = new Object();
__ref = obj;
if (typeof(__ref) === "undefined"){
    $ERROR('#2: obj = new Object(); __ref = obj; typeof(__ref) !== "undefined"');
}; 
if (delete __ref !== true){
    $ERROR('#3: obj = new Object(); __ref = obj; delete __ref === true. Actual: ' + (delete __ref));
};
if (typeof(__ref) !== "undefined"){
    $ERROR('#4: obj = new Object(); __ref = obj; delete __ref; typeof(__ref) === "undefined". Actual: ' + (typeof(__ref)));
};
if (typeof(obj) !== "object"){
    $ERROR('#5: obj = new Object(); __ref = obj; delete __ref; typeof(obj) === "object". Actual: ' + (typeof(obj)));
};