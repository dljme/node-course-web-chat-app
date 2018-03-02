var expect = require('expect');

var {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var str = 3;
        var validation = isRealString(str);
        expect(validation).toBe(false);
    });

    it('should reject string with only spaces', () => {
        var str = ' ';
        var validation = isRealString(str);
        expect(validation).toBe(false);
    });

    it('should allow string with non-space characters', () => {
        var str = ' dlj ';
        var validation = isRealString(str);
        expect(validation).toBe(true);
    });
});
