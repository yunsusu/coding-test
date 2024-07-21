function solution(n) {
    var answer = 0;
    let box = n.toString(3).split("").reverse().join("")
    
    answer = parseInt(box,3)
    
    return answer;
}
// 10