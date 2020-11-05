// String Calculator

// const Add = (str) => {
// if (str.length === 0) return 0;
// let nums = str.split(',');

// let total = nums.reduce((acc, curr) => {
//     let current = parseInt(curr);
//     let accumulate = parseInt(acc);
//     return accumulate += current;
// })
// return total;
// }

// const str1 = '1,2,3,4';
// const str2 = "\n1,\n2,3,4";

// console.log(Add(str1));
// console.log(Add(str2));

const Add = (str) => {
    if (str.length === 0) return 0;

    const getDelimeter = () => {
        // Find where our delimeter ends
        let end = str.indexOf('\n');
        // Isolate our delimeter(s)
        let delimeter = str.slice(2,end);
        return [delimeter, end];
    }

    const findNegatives = (arr) => {
        return `Negatives aren't allowed! Please remove the following numbers: ${arr.filter((num) => num < 0)}`;
    }


    let delimeter = str.match('//') ? getDelimeter() : ',';
    let nums = (delimeter === ',') ? str.split(',') : str.slice(delimeter[1], str.length).split(delimeter[0]);

    if (delimeter !== ',') nums.splice(0,1);

    let negatives = false;
    let total = nums.reduce((acc, curr) => {
        let current = parseInt(curr) > 1000 ? 0 : parseInt(curr);
        let accumulate = parseInt(acc);
        if (current < 0) negatives = true;


        return accumulate += current;
    })
    return (negatives) ? findNegatives(nums) : total;
}

const str1 = '//***\n***1***2***3***4';
const str2 = "\n1,\n2,3,1000";

console.log(Add(str1));
console.log(Add(str2));