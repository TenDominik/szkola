const url=require('url');
const adres='http://www.rcezbilgoraj.lbl.pl/';
const q=url.parse(adres,true);
console.log(q.host);
console.log(q.pathname);
console.log(q.hostname);
console.log(q.href);
