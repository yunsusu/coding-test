function solution(num_str) {
    var answer = 0;
    let box = num_str.split("");
    for(let i = 0; i<box.length; i++){
        answer+=Number(box[i])
    }
    return answer;
}