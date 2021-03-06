var tokenCodes = {
    undefined: 'undefined',
    NaN: 'NaN',
    Infinity: 'Infinity',
};
var arr = [
    'undefined',
    'NaN',
    'Infinity'
];
for (var i = 0; i < arr.length; ++i) {
    var propertyName = arr[i];
    assert(tokenCodes.hasOwnProperty(propertyName),
           'Property "' + propertyName + '" found');
    assert.sameValue(tokenCodes[propertyName], propertyName,
                     'Property "' + propertyName + '" has correct value');
}