import round from '../calc/round';

/**
 * 
 * @param {Number} sg specific gravity
 * @returns {Number} returns degrees plato rounded to a single decimal place 
 */
export default function convertSgToPlato(sg) {
    var plato = (((182.4601 * sg - 775.6821) * sg + 1262.7794) * sg - 669.5622);
    
    return round(plato, 1);
}

