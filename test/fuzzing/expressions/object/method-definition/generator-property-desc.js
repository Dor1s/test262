var obj = { *method() {} };
verifyEnumerable(obj, 'method');
verifyWritable(obj, 'method');
verifyConfigurable(obj, 'method');