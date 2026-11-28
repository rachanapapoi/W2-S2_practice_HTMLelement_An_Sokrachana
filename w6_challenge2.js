function ReverseAnArray(array){
    let reverse=[];
    let index=0;
    for(let i=array.length-1;i>=0;i--){
        reverse[index]=array[i];
        index++;
    }
    console.log(reverse);
}
console.log(ReverseAnArray([14,15,16,20]));
//console.log(reverse);