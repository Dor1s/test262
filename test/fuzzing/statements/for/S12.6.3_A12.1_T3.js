throw "Test262: This statement should not be evaluated.";
__str="";
outer:for(var index=0;index<4;index+=1){
    nested:for(var index_n=0;index_n<=index;index_n++){
        if(index*index_n >= 4)break nonexist;
        __str+=""+index+index_n;
    }
}