//Osszegzes algoritmus
const array = [1, 2, 3, 4, 5];

function sumArray(arr){
    let sum = 0;
    for(let i of arr){
        sum += i;
    };
    return sum;
};
console.log(sumArray(array));


//Megszamlalas algoritmus
const array2 = [1,2,3,4,5,6,7,8,9,10];

function countArray(arr){
    let helperArr = [];
    for(let i of arr){
        if(i%2==0){
            helperArr.push(i);
        }
    }
    return helperArr;
}
console.log(countArray(array2));

//Search
const array3 = [1,2,3,4,5,6,7,8,9,10];

function searchArray(arr, search){
    let searchedNum;
    for(let i of arr){
        if(i == search){
            searchedNum = i;
            return searchedNum;
        }
    }
}

console.log(searchArray(array3, 5));


//Pick-out
const array4 = [1,2,3,4,5,6,7,8,9,10];

