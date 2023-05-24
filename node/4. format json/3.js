const fs=require('fs');
let tekst = fs.readFileSync('./tekst.json');
let baza=JSON.parse(tekst);
console.log(baza);
console.log('pracownik '+baza.pracownicy[1].pracownik1.imie+' '+baza.pracownicy[1].pracownik1.nazwisko+' nie jest najlepszyh');