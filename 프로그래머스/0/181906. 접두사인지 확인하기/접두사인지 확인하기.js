function solution(my_string, is_prefix) {
    var answer = 0;
    let text = my_string.slice(0,is_prefix.length)
    if(is_prefix === text){
        answer = 1
    }
    return answer;
}