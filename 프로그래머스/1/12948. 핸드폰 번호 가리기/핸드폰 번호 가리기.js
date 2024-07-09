function solution(phone_number) {
    var answer = '';
    
    let a = phone_number.substr(phone_number.length-4,phone_number.length)
    let b= phone_number.substr(0,phone_number.length-4)
    
    console.log(b.split("").length)
    for(let i = 0; i<b.split("").length; i++){
        answer += "*"
    }
    
    answer += a
    
    return answer;
}