function voting(votes){
    let count=[0,0,0];
    for( let i=0;i<votes.length;i++){
        if(votes[i]==='A'){
            count[0]++;
        }else if(votes[i]==='B'){
            count[1]++;
        }else if(votes[i]==='C'){
            count[2]++;
        }
    }
    if(votes.length==0){
        console.log("There is not vote yet");
    }

    if(count[0]>count[1]){
        if(count[0]>count[2]){
            console.log("A is the winner");
        }
        if(count[0]<count[2]){
            console.log("C is the winner");
        }
    }else if(count[0]<count[1]){
        if(count[1]>count[2]){
            console.log("B is the winner");
        }
        if(count[1]<count[2]){
            console.log("C is the winner");
        }
    }else if(count[0]==count[1] && votes.length!=0){
        console.log("A and B are both winners");
    }else if(count[1]==count[2]&& votes.length!=0){
        console.log("B and C are both winners");
    }else if(count[0]==count[2] && votes.length!=0){
        console.log("A and c are both winners");
    }
}
console.log("-case 1");
console.log(voting(['A','B','A','C','A']));
console.log("___________________________");
console.log("-case 2");
console.log(voting(['A','B','B','C','A']));
console.log("___________________________");
console.log("-case 3");
console.log(voting([]));