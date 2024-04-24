function solution(n) {
    let answer = 0;
    for(let i = 1; i<=n; i++){
    let box = 0;
        for(let o = i ; o<=n ; o++){
            box += o;
            if(box >=n){
                if(box === n){
                    answer++
                }
                break;
            }
        }
        
    }
    
    return answer;
}