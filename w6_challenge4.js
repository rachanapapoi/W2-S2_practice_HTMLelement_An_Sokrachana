function countchar(text,target){
    let count=0;
    for( let i=0;i<text.length;i++){
        if(text[i]===target){
            count++;
        }
    }
    console.log(target,count);
}
console.log("-case 1");
console.log(countchar("hello world",'o'));
console.log("___________________________");
console.log("-case 2");
console.log(countchar("aaa bbb a",'a'));
console.log("___________________________");
console.log("-case 3");
console.log(countchar("abc",'d'));