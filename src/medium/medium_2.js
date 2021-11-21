import mpg_data from "./data/mpg_data.js";
import {getStatistics} from "./medium_1.js";

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/


/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */
export const allCarStats = {
    avgMpg: get_mpg(mpg.data),
    allYearStats: get_year_sta(array),
    ratioHybrids: get_hybrid,
};

export function get_mpg(array) {
    const helper= {};
        const length_a  = array.length;
        var count_h = 0;
        var count_c = 0;
        for(let i=0; i<length_a;i++){
            count_h = count_h+array[i][highway_mpg];
            count_c = count_c+array[i][city_mpg];
        }
        helper.city= count_c/length_a;
        helper.highway= count_h/length_a;
        return helper;
}

export function get_year_sta(array) {
    const all_years = [];
    for(let i=0; i<array.length;i++){
        all_years[i]=array[i][year];
    }
    return getStatistics(all_years);
} 

export function get_hybrid(array) {
    var count_hybrid=0;
    for(let i=0; i<array.length;i++){
        if(array[i][hybrid]==true){
            count_hybrid= count_hybrid+1;
        }
    }
    return count_hybrid/length_a;
}

/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */
export const moreStats = {
    makerHybrids: make_hyb(mpg_data),
    avgMpgByYearAndHybrid: undefined
};

export function make_hyb(array) {
    let set1 = new Set();
    for(let i=0; i < array.length(); i++){
        set1.add(array[i].make)
    }

    const helper = [];
    for(let j=0; j < set1.size;j++){
        const helper2 = [];
        for(let z=0; z<array.length; z++){
            if(array[z].make == set1[i]){
                 helper2.push(array[z].hybrids)
            }
            helper.push({make:set1[j],hybrids:helper2})
        }

    }
    return helper;
}

export function avg_hbr(array) {
    const result = [];
    let set1 = new Set();
    for(let i=0; i < array.length(); i++){
        set1.add(array[i].year);
    }
    
    for(let j=0; j<set1.size;j++){
        const helper1 = [];
        const helper2 = [];
        for(let z=0; z<array.length;z++){
            if(set[i]==array[z].year){
                if(array[z].hybrid==true){
                    helper1.push(array[z]);
                }
                else {
                    helper2.push(array[z]);
                }
            }
        }
        const avg1 = getAvg(helper1);
        const avg2 = getAvg(helper2);
        result[set1] = {hybrid:avg1, notHybrid:avg2};
    }
    return result;
}