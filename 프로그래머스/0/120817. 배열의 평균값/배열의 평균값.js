function solution(numbers) {
    var answer = 0;
    numbers.map((item)=>{
        answer+=item
    })
    answer = answer/numbers.length
    return answer;
}