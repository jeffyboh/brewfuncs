import chai from 'chai';
import abv from '../src/calc/abv';
import round from '../src/calc/round';

const assert = chai.assert;

describe('rounding tests', function() {
    it('should round 1.9999 to 2.00', function() {
        var num = 1.9999;
        let out = round(num, 2);
        assert.equal(out, 2);
    }),
    it('should round 1.005 to 1.01', function() {
        var num = 1.005;
        let out = round(num, 2);
        assert.equal(out, 1.01);
    }),
    it('should round 1.0009 to 1.001', function() {
        var num = 1.0009;
        let out = round(num, 3);
        assert.equal(out, 1.001);
    }),
    it('should round .0009 to 0', function() {
        var num = .0009;
        let out = round(num, 1);
        assert.equal(out, 0);
    });
});

describe('abv calculator', function() {
    it ('should calculate abv 5.25', function() {
        var og = 1.050;
        var fg = 1.010;
        let alc = abv(og, fg);

        assert.equal(alc, 5.25);
    });
});