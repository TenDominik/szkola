const tab=
[
    {id:1 , nazwa:"Humpert"},
    {id:2 , nazwa:"Hrumbert"},
    {id:3 , nazwa:"Hubret"},
    {id:4 , nazwa:"Huprent"},
    {id:5 , nazwa:"Hubibertos"},
]

module.exports=
{
    pokaz()
    {
        const jezyki=tab.map(i=>i.nazwa);
        const lw=tab.length;
        console.log(`Lista ${lw} wyrazów: \n${jezyki.join(', \n')}`);
    }
}