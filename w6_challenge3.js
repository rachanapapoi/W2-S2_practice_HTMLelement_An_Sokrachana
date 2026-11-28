let array=[];
function findAverage(array){
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum+=array[i];
    }
    let average;
    average=sum/array.length;
    return average;
}
console.log(findAverage([85,90,78,92]));