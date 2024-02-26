function solution(array, height) {
    var answer = 0;
    array.map((item)=>{
        if(item > height){
            answer++
        }
    })
    return answer;
}