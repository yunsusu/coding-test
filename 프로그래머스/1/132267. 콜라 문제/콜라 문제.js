function solution(a, b, n) {
    var answer = 0;
    let num = n
    
    while(num>=a){
            answer += Math.floor(num/a)*b
            num = Math.floor(num/a)*b+(num % a)
        
        
    }
    
    return answer;
}