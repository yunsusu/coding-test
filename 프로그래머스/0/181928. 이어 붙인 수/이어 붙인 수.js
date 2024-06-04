function solution(num_list) {
    let numa = [];
    let numb = [];
    
    for(let i = 0; i<num_list.length; i++){
        let a = num_list[i]%2
        if(a === 0 ){
            numa.push(num_list[i])
        }else {
            numb.push(num_list[i])
        }
    }
    
    return Number(numa.join(""))+Number(numb.join(""));
}