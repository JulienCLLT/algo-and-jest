const app = require('../app');

test('transform string separate by - or _ on camelcase ',()=>{
    expect(app.toCamelCase('test-transfom-camel')).toBe('TestTransfomCamel');
    expect(app.toCamelCase('test_transfom_camel')).toBe('TestTransfomCamel');
    expect(app.toCamelCase('test-transfom_camel')).toBe('TestTransfomCamel');
    expect(app.toCamelCase('test_transfom-camel')).toBe('TestTransfomCamel');
});

test('simulate outdoor panel scrolling',()=>{
    expect(app.rotate("Paramount")).toEqual(["aramountP", 'ramountPa', 'amountPar', 'mountPara', 'ountParam', 'untParamo', 'ntParamou',  'tParamoun', 'Paramount'])
})