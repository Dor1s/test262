for(var i=0;i<10;i++){}
if (i!==10)	$ERROR('#1: i === 10. Actual:  i ==='+ i  );
var j=0;
for(var i=1;i<10;i*=2){
	j++;
}
if (i!==16)  $ERROR('#2.1: i === 16. Actual:  i ==='+ i  );
if (j!==4)  $ERROR('#2.2: j === 4. Actual:  j ==='+ j  );
var j=0;
for(var i=16;i>1;i=i/2){
  j++;
}
if (i!==1)  $ERROR('#3.1: i === 1. Actual:  i ==='+ i  );
if (j!==4)  $ERROR('#3.2: j === 4. Actual:  j ==='+ j  );
var j=0;
for(var i=10;i>1;i--){
  j++;
}
if (i!==1)  $ERROR('#4.1: i === 1. Actual:  i ==='+ i  );
if (j!==9)  $ERROR('#4.2: j === 9. Actual:  j ==='+ j  );
var j=0;
for(var i=2;i<10;i*=i){
  j++;
}
if (i!==16)  $ERROR('#5.1: i === 16. Actual:  i ==='+ i  );
if (j!==2)  $ERROR('#5.2: j === 2. Actual:  j ==='+ j  );