let baza=require('./tekst.json');
//console.log(baza);
console.log(baza.pracownicy);
console.log('Telefony '+baza.pracownicy[0].pracownik.imie+'a '+baza.pracownicy[0].pracownik.nazwisko+'a, to '+baza.pracownicy[0].pracownik.telefony[0]+', '+baza.pracownicy[0].pracownik.telefony[1]+'.');