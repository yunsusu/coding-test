function solution(name, yearning, photo) {
    var answer = [];
    
    photo.map((item,index)=>{
        let box = 0;
      for(let i = 0; i< item.length;i++){
        // console.log(item[i])
          for(let o = 0; o<name.length; o++){
              // console.log(name[o])
              if(item[i] === name[o]){
                  box += yearning[o]
              }
          }
    }
          answer.push(box)
    })
    
    
    return answer;
}

// 7:36 ~ 7:44
