// Write a function which takes two numbers and returns their sums
// 1. can i restate the problem in my own words?
// 2. what are the inputs that go into the problem?
// 3. what are the outputs that should come from the solution to the problem?
// 4. can the outputs be detrmined from the inputs? 
// 5. how should i label the important pieces of data that are part of the problem
//--------



// Write a function which takes in a string and returns counts of each character in the string
charCount("aaaa") // {a:4}
charCount("hello") // {h:1, e:1, l:2, o:1}

function charCount(str){
    // make object to return at end
    var result = {};
    // loop over string, for each character ..
    for (var i = 0; i < str.length; i++){
        var char = string[i].toLowerCase()
    // if the char is a number/letter AND is a key in object, add one to count
        if (result[char] > 0){
            result[char]++;
     // if the char is a number/letter AND not in object, add it to object and set value to 1
        } else {
            result [char] = 1;
        };
    }
    // if charceter is something else(space, period, etc), dont do anything
    // return object at end
    return result;
}

function charCount(str){ 
var result = {};
for (var i = 0; i < str.length; i++){
    var char = string[i].toLowerCase()
    if (result[char] > 0){
        result[char]++;
    } else {
        result [char] = 1;
    }
    return result;
    }
}