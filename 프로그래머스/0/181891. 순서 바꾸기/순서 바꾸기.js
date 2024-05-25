function solution(num_list, n) {
    var answer = [];
    let box = num_list.slice(0,n)
    answer = num_list.slice(n,num_list.length)
    for(let i =0 ; i<box.length; i++){
        answer.push(box[i])
    }
    
    
    
    return answer;
}