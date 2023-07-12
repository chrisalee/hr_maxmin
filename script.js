/*
 * Complete the 'maxMin' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
 */

function maxMin(k, arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    
    let diff = Infinity;
    for(let i = 0; i < sortedArr.length - k + 1; i++) {
        let currDiff = sortedArr[k + i - 1] - sortedArr[i];
        if(currDiff < diff) diff = currDiff;
    }
    console.log(diff);
    return diff;
}
