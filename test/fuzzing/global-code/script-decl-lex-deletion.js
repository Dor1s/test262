$262.evalScript('let test262let;');
delete test262let;
test262let;
$262.evalScript('const test262const = null;');
delete test262const;
test262const;
$262.evalScript('class test262class {}');
delete test262class;
test262class;