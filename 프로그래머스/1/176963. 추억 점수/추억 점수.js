function solution(name, yearning, photo) {
    var answer = [];
    
    photo.map((item,index)=>{
        let box = 0;
      for(let i = 0; i< item.length;i++){
          for(let o = 0; o<name.length; o++){
              if(name[o] === item[i]){
                  box += yearning[o]
              }
          }
        }
          answer.push(box)
    })
    
    
    return answer;
}

// 7:36 ~ 7:45