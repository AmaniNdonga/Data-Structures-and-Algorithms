function euclideanGCDRecursive(first, second) {
    /*
    GCD of two numbers using Euclidean Recursive Algorithm
    first = 1st number
    second = 2nd number
    returns GCD of number
    */
   if (second === 0) {
       return first;
   } else{
       return euclideanGCDRecursive(second, (first % second));
   }
}

function euclideanGCDIterative(first, second) {
    /*
    GCD using Euclidean Iterative Algo
    */
   while (second !== 0) {
       let temp = second;
       second = first % second;
       first = temp;
   }
   return first;
}

function main() {
    let first = 20;
    let second = 30;
    console.log('Recursive GCD for %d and %d is %d', first, second, euclideanGCDRecursive(first, second));
    console.log('Iterative GCD for %d and %d is %d', first, second, euclideanGCDIterative(first, second));
}

main();