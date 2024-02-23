function solution(numbers) {
    var answer = 0;
    numbers.map((item)=>{
        answer+=item
    })
    return answer/numbers.length;
}