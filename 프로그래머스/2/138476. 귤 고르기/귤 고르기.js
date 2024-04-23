function solution(k, tangerine) {
    var answer = 0;
    let box = {};
    // let a = tangerine.sort((a,b)=>a-b);
    
    for(let i = 0; i<tangerine.length; i++){
        if(box[tangerine[i]] !== undefined){
            box[tangerine[i]] = box[tangerine[i]]+1;
        }else {
            box[tangerine[i]] = 1;
        }
    }
    
    let counts = Object.values(box).sort((a, b) => b - a);
    let num = 0
    for(let i = 0; i<counts.length;i++){
        if(num>=k){
            break;
        }else{
            num += counts[i]
            answer ++
        }
        
    }
    
    return answer;
}