
const translate = require('@vitalets/google-translate-api')
const fs = require('fs');
const array = fs.readFileSync('text.txt','utf8').toString().split("\n");
array.sort();
console.log(array);
array.forEach(async element => {
    element = element.replace('\r',"");
    const response = await translate(element, {to: 'vi'});
    let tu = element;
    let nghia = '';
    response.raw[1][0][0][5][0][4].forEach(i=>{
            nghia+=i[0];
            nghia+=";";
    }) 
    let vidu = response.raw[3][1][0][0][1][0][1] +';';
    let loaitu = response.raw[3][1][0][0][0];
    let line = tu +'/'+loaitu+'/'+ nghia +'/'+vidu+'/' +'\n';
    fs.writeFileSync('out.txt',line,{flag:"a"})
});
