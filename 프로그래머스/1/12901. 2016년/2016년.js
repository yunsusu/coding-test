function solution(a, b) {
    let box = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    let s = new Date(`2016-${a}-${b}`).getDay();
    
    return box[s];
}