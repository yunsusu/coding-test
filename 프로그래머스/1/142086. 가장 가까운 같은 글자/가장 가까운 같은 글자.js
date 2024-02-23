function solution(s) {
    var answer = [];
    let box = s.split("")
    box.map((item,index)=>{
        let num = 0;
        for(let i = index; i>=0;i--){
            if(s[i] === item && i!=index){
                num=index-i
                break;
            }else{
                num=-1
            }
        }
        answer.push(num)
    })
    
    return answer;
}