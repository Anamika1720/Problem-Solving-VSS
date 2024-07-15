const str = "anna"

 let isPalindrome = function (str){
    for(let i=0; i<=str.length/2; i++) {
        if(str[i] !== str[str.length-1-i]) {
            return false;
        }
    }
    return true;
};

let res = isPalindrome(str);
console.log(res);