function solution(n) {
    var answer = 0;
    let num = 1;
    
    while(num <= n){
        if(num*num > n){
            return -1;
        }else if(num*num == n){
            return (num+1)*(num+1)
        }
        num++
    }
    
    
    return answer;
}