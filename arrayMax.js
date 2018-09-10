const values = [3, 11, 7, 2, 9, 10];

let max = 0;
for(i=0; i<values.length; i++){    
    if(max < values[i]){
        max =  values[i];
    }
}
console.log(max);
