function fn1([...args]) {}
function fn2([,,,,,,,...args]) {}
function fn3([x, {y}, ...z]) {}
function fn4([,x, {y}, , ...z]) {}
function fn5({x: [...y]}) {}