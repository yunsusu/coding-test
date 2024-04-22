function solution(number, limit, power) {
    var answer = 0;
    let box = [];
    
    for(let i = 1; i<=number; i++){
        let num = 0
       for (let o = 1; o * o <= i; o++) {
            if (i % o === 0) {
                if (i / o === o) {
                    num++;
                } else {
                    num += 2;
                }
            }
        }
        if(num<=limit){
            answer += num
        }else{
            answer+= power
        }
    }
    
    
    return answer;
}