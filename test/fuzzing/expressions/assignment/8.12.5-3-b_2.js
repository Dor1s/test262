    var tempObj = {};
    
    Object.defineProperty(tempObj, "reduce", { value:456, enumerable:false, writable:true});
    var origDesc = Object.getOwnPropertyDescriptor(tempObj, "reduce");
    var newDesc;
        tempObj.reduce = 123;
        newDesc = Object.getOwnPropertyDescriptor(tempObj, "reduce");
        var descArray = [origDesc, newDesc];
        
        for (var j in descArray) {
            for (var i in descArray[j]) {
                if (i==="value") {
                    assert.notSameValue(origDesc[i], newDesc[i], 'origDesc[i]');
                }
                else {
                    assert.sameValue(origDesc[i], newDesc[i], 'origDesc[i]');
                }
            }
        }