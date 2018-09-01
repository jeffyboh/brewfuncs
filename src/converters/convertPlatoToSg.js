import round from '../calc/round';

/**
 * 
 * @param {Number} plato degrees plato
 * @returns {Number} returns the specific gravity rounded to 3 decimal places
 */
export default function convertPlatoToSg(plato) {
    var sg = plato / (258.6 - ((plato / 258.2) * 227.1)) + 1;

    return round(sg, 3);
}