const system=require('os');
console.log('Pstyra ukradł tą wersje systemu: '+system.version);
console.log('komputer jest uruchomiony od: '+system.uptime+'s. a to:'+(system.uptime()/60).toFixed(0)+' minut , a to:'+(system.uptime()/3600).toFixed(0)+' godzin');
console.log('Humpert ukradł rodzinę systemów o nazwie: '+system.type);