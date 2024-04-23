function solution(s) {
    var answer = '';
    let a = s.toLowerCase().split(" ")
    let bbox = []
    
    a.map((item,index)=>{
        let box = item.split("");
        
        let m =[]
        for(let i = 0; i<box.length; i++){
            if(i===0){
                m.push(box[0].toUpperCase())
            }else{
                m.push(box[i])
            }
        }
        bbox.push(m.join(""))
    })
   answer = bbox.join(" ")
    
    return answer;
}