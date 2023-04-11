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
    }
    for(let i = 0; i < arr1.length; i++){
        let correctindex = arr2.indexOf(arr[i] ** 2)
        if(correctIndex === -1){
            return false;
        }
        arr2.splice(correctIndex, 1)
    }
    return true;
}

[1, 2, 3, 2], [9, 4, 4]

// refactored, time - O(n)

function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for (let key in frequencyCounter1){
        if (!(key ** 2 in frequencyCounter2)){
            return false
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}