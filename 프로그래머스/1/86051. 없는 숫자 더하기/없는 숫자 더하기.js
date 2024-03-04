function solution(numbers) {
    var answer = 45;
    let num = 0
    numbers.sort((a,b)=>a-b)
    console.log(numbers)
    for(let i = 0; i<=9;i++){
        for(let a of numbers){
            if(a === i){
                num += a
            }
        }
    }
    answer -= num
    return answer;
}