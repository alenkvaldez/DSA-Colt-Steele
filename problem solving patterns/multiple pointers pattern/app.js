// write a function called sumZero which accepts a sorted array of intergers
// the function should find the first pair where the sum is zero
// return an array that includes both values that sum to zero or 
// undefined if a par does not exist

// naive 
// time complexity - O(N^2)
// space complexity - O(1)

function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return[arr[i], arr[j]];
            }
        }
    }
}

// refactor
// time - O(N)
// space - 0(1)

function sumZero(arr){
    let left = 0;
    // pointer starts at start
    let right = arr.length - 1;
    // pointer starts at last index of array
    while(left < right){
        let sum = arr[left] + arr[right];
        // check sum of array of left and array of right
        if(sum === 0){
            return [arr[left], arr[right]];
            // if sum is 0, we are done
        } else if (sum > 0){
            right--;
            // if sum is greater than 0, we subtract 1 from right
        } else {
            left++;
            // add one to left 
        }
    }
}