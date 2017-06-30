try{
  with(undefined) x = 2;
  $ERROR('#2.1: with(undefined) x = 2 must throw TypeError. Actual: x === ' + (x));
}
catch(e){
  if((e instanceof TypeError) !== true){
    $ERROR('#2.2: with(undefined) x = 2 must throw TypeError. Actual: ' + (e));
  }
}