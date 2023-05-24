const http=require('http');

const host='127.0.0.1';
const port=5555;

const requestListener = function(req,res){
    res.setHeader('Content-Type','text/html');
    res.writeHead(200);
    res.write(`<h1 style="background-color:gold;">Hubibertos Humpert Hubcioch Hrumbert Huprent Pstyra</h1>`);
    res.end('<p>Humper Pstyra ma komputer z kradzionym windowzem a komputer ma... wirusa</p>');
}

const server = http.createServer(requestListener);
server.listen(port,host,()=> {
    console.log(`server działa na: http://${host}:${port}`);
});
