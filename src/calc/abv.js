import round from './round';
/**
 * Calculates estimated ABV based on the original and final gravity readings
 * 
 * @param {Number} originalGravity Your original gravity before fermentation
 * @param {Number} finalGravity Your final gravity after fermentation
 * @returns {Number} pecentage of Alcohol By Volume
 */
export default function abv (originalGravity, finalGravity) {
    return round((originalGravity - finalGravity) * 131.25, 2);
}