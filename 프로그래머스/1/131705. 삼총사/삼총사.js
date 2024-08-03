function solution(number) {
    var answer = 0;
    const leng = number.length;
    let num = 0;
    let count=0
    
    while (num < leng){
        for(let o = 0; o<leng; o++){
            for(let i =0; i<leng; i++){
                if(num != o && num!= i && o!=i&&num < o && o<i){
                    // console.log(num,i,o)
                    count = number[num]+number[o]+number[i]
                    if(count === 0){
                        // console.log(count)
                        answer++
                    }
                }
            }
        }
        num++
    }
    
    
    
    return answer;
}