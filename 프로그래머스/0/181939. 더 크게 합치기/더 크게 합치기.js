function solution(a, b) {
    var answer = String(a) + String(b);
    var answer2 = String(b) + String(a);
    return Number(answer)>Number(answer2) ? Number(answer) : Number(answer2);
}