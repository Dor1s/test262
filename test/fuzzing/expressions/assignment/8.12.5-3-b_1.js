    var origDesc = Object.getOwnPropertyDescriptor(Array.prototype, "reduce");
    var newDesc;
        Array.prototype.reduce = function () {;};
        newDesc = Object.getOwnPropertyDescriptor(Array.prototype, "reduce");
        var descArray = [origDesc, newDesc];
        
        for (var j in descArray) {  //Ensure no attributes are magically added to newDesc
            for (var i in descArray[j]) {
                if (i==="value") {
                    assert.notSameValue(origDesc[i], newDesc[i], 'origDesc[i]');
                }
                else {
                    assert.sameValue(origDesc[i], newDesc[i], 'origDesc[i]');
                }
            }
        }