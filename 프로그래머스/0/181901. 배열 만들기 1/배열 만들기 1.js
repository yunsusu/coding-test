function solution(n, k) {
    var answer = [];
    
    for(let i = 1; i*k <= n; i++){
        answer.push(k*i)
    }
    
    return answer;
}