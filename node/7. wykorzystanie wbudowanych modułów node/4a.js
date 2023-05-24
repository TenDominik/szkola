const fs=require('fs');
const katalog='./';
let l=0;
fs.readdir(katalog, (err,dane)=>
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        let lista='';
        dane.forEach(plik=>{lista+=plik+', '; l++});
        console.log("Zawartość katalogu: "+lista);
    }
    console.log(`liczba elementów w badanym katalogu wynosi ${l}.`);
});