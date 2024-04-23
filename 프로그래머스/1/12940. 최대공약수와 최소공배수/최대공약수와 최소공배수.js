function solution(n, m) {
    var answer = [];
    let box = 0;
    
    for(let i = 1; i <= Math.min(n,m); i++){
        if(Math.min(n,m) % i === 0 && Math.max(n,m)%i === 0){
            box = i;
        }
    }
    
    answer = [box, n*m/box]
    
    return answer;
}