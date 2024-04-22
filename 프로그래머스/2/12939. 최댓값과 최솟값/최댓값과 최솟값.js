function solution(s) {
    var answer = '';
    let box = []
    let a = s.split(" ")
    a.sort((a,b)=>a-b)
    box = [a[0],a[a.length-1]]
    answer = `${a[0]} ${a[a.length-1]}`
    return answer;
}