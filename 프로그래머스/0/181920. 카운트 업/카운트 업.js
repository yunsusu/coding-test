function solution(start_num, end_num) {
    var answer = [];
    let num = start_num;
    
    while(answer.length <= end_num-start_num){
        answer.push(num)
        num++
    }
    
    return answer;
}