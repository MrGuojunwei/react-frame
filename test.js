
const fs = require('fs');
const { parse, parseExpression } = require('@babel/parser');

fs.readFile('./parse.js', (err, data) => {
    if (err) { return; }
    data = data.toString();
    const ast = parse(data)
    fs.writeFile('./a.js', ast, () => {
        console.log('写入文件成功')
    })
})