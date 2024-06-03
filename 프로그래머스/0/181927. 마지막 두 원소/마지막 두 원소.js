function solution(num_list) {
    var answer = [...num_list];
    var rev = [...num_list].reverse(); 

    if (rev[0] > rev[1]) {
        answer.push(rev[0] -rev[1]);
    } else if (rev[0] <= rev[1]) {
        answer.push(rev[0] * 2);
    }

    return answer;
}