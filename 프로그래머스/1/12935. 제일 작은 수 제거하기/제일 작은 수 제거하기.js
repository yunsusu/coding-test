function solution(arr) {
    var answer = [];
    let a = Math.min(...arr)
    
    for(let i of arr){
        if(a !== i){
            answer.push(i)
        }
    }
    
    if(answer.length == 0){
        answer.push(-1)
    }
    
    return answer;
}