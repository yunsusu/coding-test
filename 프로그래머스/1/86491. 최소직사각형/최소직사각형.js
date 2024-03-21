function solution(sizes) {
    var answer = 1;
    
    for(let i =0; i<2; i++){
        let box = 0;
        for(let a = 0; a<sizes.length; a++){
            sizes[a].sort((a,b)=>a-b)
            if(box < sizes[a][i]){
                box = sizes[a][i]
            }
        }
        answer *=box
    }
    
    return answer;
}