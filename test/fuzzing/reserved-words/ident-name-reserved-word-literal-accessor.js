var test;
var tokenCodes = {
    set null(value) { test = 'null'; },
    get null() { return 'null'; },
    set true(value) { test = 'true'; },
    get true() { return 'true'; },
    set false(value) { test = 'false'; },
    get false() { return 'false'; },
};
var arr = [
        'null',
        'true',
        'false',
];
for (var i = 0; i < arr.length; ++i) {
    var propertyName = arr[i];
    assert(tokenCodes.hasOwnProperty(propertyName),
           'Property "' + propertyName + '" found');
    assert.sameValue(tokenCodes[propertyName], propertyName,
                     'Property "' + propertyName + '" has correct value');
    tokenCodes[propertyName] = 0;
    assert.sameValue(test, propertyName,
                     'Property "' + propertyName + '" sets correct value');
}