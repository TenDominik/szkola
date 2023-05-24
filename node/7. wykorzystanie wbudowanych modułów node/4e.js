const fs=require('fs');
const text='Hrumberd Psdyra gdzieś zniknął';
fs.appendFile('test.txt',"\n"+text,(err,dane)=>
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("udało sie zapisać!");
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