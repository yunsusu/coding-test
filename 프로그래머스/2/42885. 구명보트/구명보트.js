function solution(people, limit) {
    var answer = 0;
    let box = people.sort((a, b) => a - b);
    let a = 0;
    let b = box.length - 1;

    while (a <= b) {
        if (box[a] + box[b] <= limit) {
            a++;
        }
        b--;
        answer++;
    }

    return answer;
}