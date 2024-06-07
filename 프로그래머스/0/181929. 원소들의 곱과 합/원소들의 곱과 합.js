function solution(num_list) {
    let sum = 0;
    let gob = 1;
    for(let i = 0 ;i < num_list.length; i++){
        sum += num_list[i]
        gob *= num_list[i]
    }
    
    return sum*sum > gob ? 1 : 0;
}