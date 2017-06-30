var tokenCodes = {
    null: 'null',
    true: 'true',
    false: 'false',
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
}