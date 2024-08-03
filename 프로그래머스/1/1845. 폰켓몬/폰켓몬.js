function solution(nums) {
    var answer = 0;
    let num = Math.floor(nums.length/2);
    let a = new Set(nums);
    console.log(a)
    
    return Math.min(a.size, num);
}