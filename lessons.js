// ---------------------------------------------------------------------------------
// 2
function spinWords(string) {
 let arr = string.split(" ");

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= 5) {
            arr[i] = arr[i].split("").reverse().join("");
        }
    }

    let result = arr.join(" ");
    return result;
}

function spinWords(string) {
    return string
        .split(" ")
        .map(word => word.length >= 5 ? word.split("").reverse().join("") : word)
        .join(" ");
}

console.log(spinWords("Welcome"));
console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test"));
console.log(spinWords("This is another test"));
console.log(spinWords("You are almost to the last test"));
console.log(spinWords("Just kidding there is still one more"));
console.log(spinWords("Seriously this is the last one"));

// ---------------------------------------------------------------------------------
// 3
