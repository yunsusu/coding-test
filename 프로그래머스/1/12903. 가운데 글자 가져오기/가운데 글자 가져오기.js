function solution(s) {
    var answer = '';
    
    console.log(Math.floor(s.length/2))
    let box = s.split("")
    
    if(s.length %2 !=0){
        answer =  box[Math.floor(s.length/2)]
    }else {
        // console.log(box[Math.floor(s.length/2)])
        answer =  box[Math.floor(s.length/2)-1]+box[Math.floor(s.length/2)]
    }
    
    return answer;
}