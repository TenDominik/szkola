const fs=require('fs');
var text='Humpert Pstyra jest nieobecny!';
fs.writeFile('test.txt',text,(err,dane)=>
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log('Udało sie zapisać plik!');
    }
});

fs.readFile('test.txt', 'utf8', (err,dane)=>
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log(dane);
    }
});