var mycars = new Array();
mycars[0] = "Saab";
mycars[1] = "Volvo";
mycars[2] = "BMW";
var mycars2 = new Array();
mycars2[0] = "Mercedes";
mycars2[1] = "Jeep";
mycars2[2] = "Suzuki";
try{
  throw mycars;
}
catch(e){
  for (var i=0;i<3;i++){
    if (e[i]!==mycars[i]) $ERROR('#1.'+i+': Exception['+i+']===mycars['+i+']. Actual:  Exception['+i+']==='+ e[i] );
  }
}
try{
  throw mycars.concat(mycars2);
}
catch(e){
  for (var i=0;i<3;i++){
    if (e[i]!==mycars[i]) $ERROR('#2.'+i+': Exception['+i+']===mycars['+i+']. Actual:  Exception['+i+']==='+ e[i] );
  }
  for (var i=3;i<6;i++){
    if (e[i]!==mycars2[i-3]) $ERROR('#2.'+i+': Exception['+i+']===mycars2['+i+']. Actual:  Exception['+i+']==='+ e[i] );
  }
}
try{
  throw new Array("Mercedes","Jeep","Suzuki");
}
catch(e){
  for (var i=0;i<3;i++){
    if (e[i]!==mycars2[i]) $ERROR('#3.'+i+': Exception['+i+']===mycars2['+i+']. Actual:  Exception['+i+']==='+ e[i]);
  }
}
try{
  throw mycars.concat(new Array("Mercedes","Jeep","Suzuki"));
}
catch(e){
  for (var i=0;i<3;i++){
    if (e[i]!==mycars[i]) $ERROR('#4.'+i+': Exception['+i+']===mycars['+i+']. Actual:  Exception['+i+']==='+ e[i] );
  }
  for (var i=3;i<6;i++){
    if (e[i]!==mycars2[i-3]) $ERROR('#4.'+i+': Exception['+i+']===mycars2['+(i-3)+']. Actual:  Exception['+i+']==='+ e[i]);
  }
}