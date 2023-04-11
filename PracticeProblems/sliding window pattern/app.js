write a function called maxSubaraySum which accepts an array of integers and a number called n. 
the function should calculate the maximum sum of n consecutive elements in the array.

function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (num > arr.length) return null;
    // if invalid array/# too large, return null
    for (let i = 0; i < num; i++){
        // start at beginning and sum first digits
        maxSum += arr[i];
        // store in variable
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++){
        tempSum = tempSum - arr [i - num] + arr[i];
        // subbing and adding one array value in(array window)
        maxSum = Math.max(maxSum, tempSum);
        // take maximum(Math.max) bw maxSum and tempSum; updates maxSum if tempSum is larger 
    }
    // starts loop at next digit
    return maxSum;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3], 3)
