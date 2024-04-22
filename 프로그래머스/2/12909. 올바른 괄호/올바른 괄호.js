function solution(s){
    var answer = false;
    let a = s.split("")
    
   
  
let left = 0;
    let right = 0;
    for(let i = 0; i<a.length; i++){
        if(a[0]==="(" && a[a.length-1] === ")" && left >= right){
            if(a[i] === "("){
                left++
            }else if(a[i] === ")"){
                right++
            }       
        }
    }
    if(left === right && left!==0){
        answer = true
    }
    
    return answer;
}