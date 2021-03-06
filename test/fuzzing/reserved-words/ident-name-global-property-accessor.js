var test;
var tokenCodes = {
    set undefined(value) { test = 'undefined'; },
    get undefined() { return 'undefined'; },
    set NaN(value) { test = 'NaN'; },
    get NaN() { return 'NaN'; },
    set Infinity(value) { test = 'Infinity'; },
    get Infinity() { return 'Infinity'; },
};
var arr = [
    'undefined',
    'NaN',
    'Infinity',
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