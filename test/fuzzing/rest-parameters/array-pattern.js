function empty(...[]) {}
function emptyWithArray(...[[]]) {}
function emptyWithObject(...[{}]) {}
function emptyWithRest(...[...[]]) {}
function emptyWithLeading(x, ...[]) {}
function singleElement(...[a]) {}
function singleElementWithInitializer(...[a = 0]) {}
function singleElementWithArray(...[[a]]) {}
function singleElementWithObject(...[{p: q}]) {}
function singleElementWithRest(...[...a]) {}
function singleElementWithLeading(x, ...[a]) {}
function multiElement(...[a, b, c]) {}
function multiElementWithInitializer(...[a = 0, b, c = 1]) {}
function multiElementWithArray(...[[a], b, [c]]) {}
function multiElementWithObject(...[{p: q}, {r}, {s = 0}]) {}
function multiElementWithRest(...[a, b, ...c]) {}
function multiElementWithLeading(x, y, ...[a, b, c]) {}