let str = "anamika";
let res = "";

function reverse(str) {
    for (i=str.length-1; i>=0; i--) {
        res += str[i];
    }    
    return res;
}

let reverseString = reverse(str);
console.log(reverseString);

