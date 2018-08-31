// Needed a simple solution to rounding and not losing .005. Special thanks to 
// Jack Moore for this article. http://www.jacklmoore.com/notes/rounding-in-javascript/

/**
 * Rounds a number to the specified number of decimals.
 * 
 * @param {Number} value The number you wish to round
 * @param {Number} decimals Number of decimals to round to
 */
export default function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}
