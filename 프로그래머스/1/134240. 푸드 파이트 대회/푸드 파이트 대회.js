function solution(food) {
    var answer = '';
    let box = []
    
    for(let i = 1; i<food.length; i++){
        let a = Math.floor(food[i]/2)
        for(let o = 0; o <a; o++){
            box.push(i)
        }
    }
    
    console.log(box)
    answer= box.concat(0).concat(box.reverse()).join("")
    return answer;
}