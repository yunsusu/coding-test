function solution(n, control) {
    var answer = n;
    let box = control.split("");
    for(let i = 0; i < box.length; i++){
        if(box[i] === "w"){
            answer +=1
        }else if(box[i] === "s"){
            answer -=1
        }else if(box[i] === "d"){
            answer +=10
        }else if(box[i] === "a"){
            answer -=10
        }
    }
    
    
    return answer;
}