function solution(brown, yellow) {
    var answer = [];
    
    let num = brown + yellow;
    for(let width = Math.floor(num/2); width>0; width--){
        if(num%width===0){
            let height = num/width;
               if(height <= width && (width-2)*(height-2) === yellow){
                   answer = [width,height];
               }
        }
        
    }
    
    return answer;
}