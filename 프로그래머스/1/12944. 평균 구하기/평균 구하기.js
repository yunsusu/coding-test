function solution(arr) {
    var answer = 0;
    let box = 0;
    for(let i = 0; i<arr.length; i++){
        box += arr[i]
    }
    answer = box/arr.length
    return answer;
}