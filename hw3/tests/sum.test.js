//Tyler Santos
//Simple unit test that adds integers
//2/8/23
const sum = require('../public/javascripts/sum.js');
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
});