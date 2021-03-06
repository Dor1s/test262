var tokenCodes = {};
tokenCodes.null = 'null';
tokenCodes.true = 'true';
tokenCodes.false = 'false';
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