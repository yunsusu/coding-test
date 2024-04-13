function solution(n, arr1, arr2) {
    var answer = [];
    let box1= [];
    let box2= [];
    let boxx = [];
    
    for(let i = 0; i<arr1.length; i++){
        if(arr1[i].toString(2).length <n){
            let b = '0'.repeat(n-arr1[i].toString(2).length);
            box1.push(b+arr1[i].toString(2))
        }else{
        box1.push(arr1[i].toString(2))
        }
        
        if(arr2[i].toString(2).length <n){
            let a = '0'.repeat(n-arr2[i].toString(2).length);
            box2.push(a+arr2[i].toString(2))
        }else{
        box2.push(arr2[i].toString(2))
        }
    }
    for(let i = 0; i<n; i++){
        let a = (box1[i].split(""));
        let aa = (box2[i].split(""));
        let b = ""
       a.map((item,index)=> {
        if(Number(a[index]) === 0 && Number(aa[index])===0){
           b+=" "
       }else{
           b+="#"
       }
                     })
        boxx.push(b)
    }
    
    
    return boxx;
}