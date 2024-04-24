function solution(arr) {
    while (arr.length > 1) {
        let gcd = 1;
        
        // 최대공약수 찾기
        for (let o = 1; o <= Math.min(arr[0], arr[1]); o++) {
            if (arr[0] % o === 0 && arr[1] % o === 0) {
                gcd = o;  
            }
        }
        
        let lcm = (arr[0] * arr[1]) / gcd;
        arr.splice(0, 2, lcm);
    }
    
    return arr[0];
}
