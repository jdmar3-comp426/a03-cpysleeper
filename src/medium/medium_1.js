import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    if(array.length ===0) throw new Error("No inputs");

    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return (sum);
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    if(array.length ===0) throw new Error("No inputs");

    array.sort(function(a,b){
      return a-b;
    });
  
    var half = Math.floor(array.length / 2);
    
    if (array.length % 2)
      return array[half];
    
    return ((array[half - 1] + array[half]) / 2.0);
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    
    let max_a= Math.max(...array);
    let min_a= Math.min(...array);
    let length_a= array.length;
    let sum_a = getSum(array);
    let mean_a = sum_a/length_a;
    let median_a = getMedian(array);
    let variance_a = variance(array, mean_a);
    let standard_a = Math.sqrt(variance_a);

    const result = {"length": length_a, "sum": sum_a, "mean":mean_a, "median": median_a, 
              "min": min_a, "max": max_a, "variance": variance_a, "standard_deviation": standard_a};

    return result;

}

