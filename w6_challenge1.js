function challenge1(width, height){
    let rectangleString='';
    for(let i=0;i<height;i++){
        for(let j=0;j<width;j++){
            rectangleString+='*';
        }
        rectangleString+="\n";
    }
    return rectangleString;
}
console.log("case 1");
console.log(challenge1(3,4));
console.log("_______________");
console.log("case 2");
console.log(challenge1(5,2));
console.log("_______________");
console.log("case 3");
console.log(challenge1(5,-2));