function solution(k, score) {
    var answer = [];
    let box = [];
    
    for(let i = 0; i<score.length; i++){
        box.push(score[i])
        if(box.length >k){
            answer.push(box.sort((a,b)=>b-a)[k-1])
        }else {
            answer.push(box.sort((a,b)=>b-a)[i])
        }
    }
    
    return answer;
}