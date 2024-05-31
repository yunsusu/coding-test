function solution(my_string, index_list) {
    var answer = '';
    let box = my_string.split("")
    let a = []
    // console.log(box)
    
    for(let i = 0; i< index_list.length; i++){
        a.push(box[index_list[i]])
    }
    answer = a.join("")
    
    return answer;
}