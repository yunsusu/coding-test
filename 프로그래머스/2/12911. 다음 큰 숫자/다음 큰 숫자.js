function solution(n) {
    var answer = 0;
    let num = n.toString(2).split("");
    let a = 0;
    num.map((item,index)=>{
        if(item == 1){
            a++
        }
    })
    
    let start = 0;
    let b= 0;
    let box = 1;
    while (start < 1){
        let num2 = (n+box).toString(2).split("");
        num2.map((item,index)=>{
            if(item == 1){
                b++
            }
        })
        box++
        if(a === b){
            start++
            answer = n+box-1
        }
        b = 0
    }
    
    return answer;
}