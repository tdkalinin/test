function maxSubstringLength(str){
    let max_length = 1;
    let current_length = 1;
    if(str.length == 0) return 0;
    else if(str.length == 1) return 1;
    else{
        for(let i=1; i<str.length; i++){
            if(str.charAt(i)==str.charAt(i-1))
                current_length++;
            else 
                current_length = 1;
            if(current_length > max_length) 
                max_length = current_length;
        }
        return max_length;
    }
}

console.log(maxSubstringLength(""));
console.log(maxSubstringLength("4"));
console.log(maxSubstringLength("44"));
console.log(maxSubstringLength("4533333253444444"));
console.log("Hello");