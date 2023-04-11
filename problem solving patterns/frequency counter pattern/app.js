/* this pattern uses objects or sets to collect values/frequences of values
can often avoid need for nested lopos or 0(N^2) operations w arrays/strings

ex - write function called same, which accepts 2 arrays
function should return true if every value in the array 
has its corresponding value squared in the second array.
frequency of values must be the same

same ([1, 2, 3], [4, 1, 9]) true
same([1, 2, 3], [1, 9]) false
same ([1, 2, 1] [4, 4, 1]) false(must be same frequency)
*/

// naive, time - N^2

function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    // if 2 arrays have diff lengths, return false
    }
    for(let i = 0; i < arr1.length; i++){
        // loop over 1st array
        let correctindex = arr2.indexOf(arr[i] ** 2)
        // call indexOf where we pass in square of each value; indexOf 1^2 in arr2
        if(correctIndex === -1){
            return false;
            // if not in there, return false
        }
        arr2.splice(correctIndex, 1)
        // if in there, remove from second array(w .splice) and move to next number
    }
    return true;
}

[1, 2, 3, 2], [9, 1, 4, 4]

// refactored, time - O(n)

function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
        // if 2 arrays have diff lengths, return false
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    // create objects to count frequency of individual values of arrays
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
        // loop over every vaue in array
    }
    for (let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
        // loop over every vaue in array
    }
    for (let key in frequencyCounter1){
        if (!(key ** 2 in frequencyCounter2)){
            return false
            // is 2^2 a key in frequencyCounter 2
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
            // do values co-respond/match
        }
    }
    return true
}
