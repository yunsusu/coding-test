function solution(n) {
    var answer = 0;
    let per = 1234567;
    
    let num1 = 0
    let num2 = 1
    for(let i = 2; i<=n; i++){
        answer = (num1+num2)%per;
        num1 = num2;
        num2 = answer;
    }
    return answer;
}