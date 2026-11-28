function countwords(text){
    let count=0;
    for( let i=0;i<text.length;i++){
        if(text[i]==' '){
            count++;
        }
    }
    count++;
    console.log(count);
}

console.log("-case 1");
console.log(countwords("hello world"));
console.log("___________________________");
console.log("-case 2");
console.log(countwords("this is the best day"));
console.log("___________________________");
console.log("-case 3");
console.log(countwords("a bb ccc ddddddd e"));