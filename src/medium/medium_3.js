import mpg_data from "./data/mpg_data.js";

/*
mpg_data is imported for you but that is for testing purposes only. All of the functions should use
a car_data param that is supplied as the first parameter.

As you write these functions notice how they could possibly be chained together to solve more complicated
queries.
 */

/**
 * @param {array} car_data - an instance of mpg_data that should be used for filtering.
 * @param minHorsepower {number}
 * @param minTorque {number}
 *
 * @return {array} An array of car objects with horsepower >= minHorsePower and torque >= minTorque
 * sorted by horsepower in descending order.
 *
 */
export function searchHighPower(car_data, minHorsepower, minTorque) {
    const result = [];
    for(let i=0; i<car_data.length;i++){
        if(car_data[i].horsepower>=minHorsepower && car_data[i].torque>=minTorque){
            result.push(car_data[i]);
        }
    }
    return result.sort(function(a, b){return b.horsepower-a.horsepower});


}


/**
 * @param {array} car_data
 * @param minCity
 * @param minHighway
 *
 *
 * @return {array} An array of car objects with highway_mpg >= minHighway and city_mpg >= minCity
 * sorted by highway_mpg in descending order
 *
 */
export function searchMpg(car_data, minCity, minHighway) {
    const result = [];
    for(let i=0; i<car_data.length;i++){
        if(car_data[i].highway_mpg>=minHighway && car_data[i].city_mpg>=minCity){
            result.push(car_data[i]);
        }
    }
    return result.sort(function(a, b){return b.highway_mpg-a.highway_mpg});
}


/**
 * Find all cars where 'id' contains the search term below.
 * Sort the results so that if the term appears earlier in the string
 * it will appear earlier in the list. Make sure searching and sorting ignores case.
 * @param car_data
 * @param searchTerm A string to that is used for searching
 * @returns {[]} array of cars
 */
export function searchName(car_data, searchTerm) {
    const result = [];
    const count = [];
    const helper = searchTerm.toUpperCase();
    for(let i=0; i < car_data.length; i++){
        if (car_data[i].id.toUpperCase().includes(helper)){
            result.push(car_data[i]);
            count.push(car_data[i].id.toUpperCase().indexOf(helper));
        }
    }


    for (let j=0; j<result.length;j++){
        for (let z=0; z<result.length; z++){
            if(count[j]>count[z]){
                const helper2 = result[z];
                result[z] = result[j];
                result[j] = helper2;

                const helper3 = count[z];
                count[z] = count[j];
                count[j] = helper3;

            }
        }
    }
    return result;
}



/**
 * Find all cars made in the years asked for.
 * Sort the results by year in descending order.
 *
 * @param car_data
 * @param {number[]} years - array of years to be included in the results e.g. [2010, 2012]
 * @returns {[]} an array of car objects
 */
export function searchByYear(car_data, years) {
    const result = [];

    for(let i=0; i<car_data.length;i++){
        if(years.includes(car_data[i].year)) {
            result.push(car_data[i]);
        }
    }

    return result.sort(function(a, b){return b.year-a.year});
}
