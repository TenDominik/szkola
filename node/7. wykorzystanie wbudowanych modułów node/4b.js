const fs=require('fs');
fs.readFile('/windows/win.ini', 'utf8', (err,dane)=>
{
    if (err)
    {
        console.log('błąd!!!');
    }
    else
    {
        console.log(dane);
    }
});