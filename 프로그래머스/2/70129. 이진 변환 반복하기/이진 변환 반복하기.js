function solution(s) {
    var answer = [];
    let num = 0;
    let box = s.toString(2).split("")
    let a = 0;
    let b = 0
    
    while(a < 1){
        let s = 0;
        let box2 = []
        b +=1
        for(let i = 0; i<box.length; i++){
            if(box[i] == 1){
                box2.push("1")
                s++
            }else if(box[i] == 0){
                num++
            }
            
        }
        if(s == 1){
            a = 1
        }
        box = box2.length.toString(2).split("");
    }
    
    answer = [b, num]
    return answer;
}