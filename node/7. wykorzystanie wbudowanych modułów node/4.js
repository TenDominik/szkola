const fs=require('fs');
const plik='1.js';
fs.access(plik,fs.constants.F_OK | fs.constants.W_OK, (err)=>
{
    if(err)
    {
        console.log(`Plik ${plik} ${err.errno===-4058 ? 'nie istnieje':'tylko do odczytu'}`);
    }
    else
    {
        console.log(`PLik ${plik} istnieje i pozwala na zapis`);
    }
});