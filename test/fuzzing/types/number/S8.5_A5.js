var x = NaN;
var x_geq_0=(x >= 0.0);
var x_leq_0=(x <= 0.0);
var x_leq_0_OR_geq_0=(x <= 0.0)||(x >= 0.0);
var x_geq_0_ADD_leq_0=(x >= 0.0) + (x <= 0.0);
if (x_geq_0){
  $ERROR('#1: NaN not greater or equal zero');
}
if (x_leq_0){
  $ERROR('#2: NaN not less or equal zero');
}
if (x_leq_0_OR_geq_0){
  $ERROR('#3: NaN not less or equal zero OR greater or equal zero');
}
if (x_geq_0_ADD_leq_0){
  $ERROR('#4: NaN not less or equal zero ADD greater or equal zero');
}