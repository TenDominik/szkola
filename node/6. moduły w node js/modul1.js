var tekst='Humpert Pstyrka ma pirackiego windowza na komputerze, a komputer ma... wirusa';
console.log(tekst);
function iloczyn(l1,l2)
{
    return l1*l2;
}
//module.exports={};   //wynik bedzie taki sam bez tej linijki jak i z nioł
module.exports={iloczyn}; //po wykonaniu skryptu w miejscu funckcji wyświetli się "[Function: iloczyn]"