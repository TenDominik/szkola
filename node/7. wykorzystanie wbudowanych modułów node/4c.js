const fs=require('fs');

fs.readFile('/windows/win.ini', 'utf8', (err,dane)=>
{
    if(err)
    {
        console.log('błąd!!!');
    }
    else
    {
        fs.writeFile('test.txt',dane,(err,dane)=>
        {
            if (err)
            {
                console.log(err);
            }
            else
            {
                console.log("udało sie zapisać plik!");
            }
        });
    }
});


