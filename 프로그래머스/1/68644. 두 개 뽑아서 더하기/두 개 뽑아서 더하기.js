function solution(numbers) {
    var answer = [];
    
    for(let i = 0; i<numbers.length; i++){
        for(let o = i+1; o<numbers.length; o++){
            answer.push(numbers[i]+numbers[o])
        }
    }
    let a = [...new Set(answer)]
    a.sort((a,b)=>a-b)
    return a;
}