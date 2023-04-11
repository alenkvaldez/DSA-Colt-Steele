/* this pattern involves dividing a data set into smaller chunks 
and then repeating a process with a subet of data 
- this pattern can tremendously decrease time complexity 

ex - given a sorted array of intergers, 
write a function called search, 
that acceps a value and returns the index where the 
value passed to the function is located. if the value is not found, 
return -1

search ([1, 2, 3, 4, 5, 6], 4) 3
search ([1, 2, 3, 4, 5], 11) -1
*/

//naive solution; linear search, 0(n)
function search (arr, val){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === val){
            return i;
        }
    }
    return -1;
}

// refactor; binary search, Log(n)
function search(array, val){

    let min = 0; 
    let max = array.length - 1;

    whlie (min <= max){
        let middle = Math.floor ((min + max) / 2);
        let currentElement = array[middle];

        if (array[middle] < val){
            min = middle +1;
        } 
        else if (array[middle] > val){
            max = middle - 1;
        }
        else {
            return middle;
        }
    }
    reurn -1;
}