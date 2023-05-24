const http=require('http');

const host='127.0.0.1';
const port=5555;


const server=http.createServer
(
    (req,res)=>
    {
        res.setHeader('Content-Type','text/html');
        res.write(`<h3>http: ${req.httpVersion}</h3>`);
        res.write(`<h3>metoda: ${req.method}</h3>`);
        res.end(`<pre>${JSON.stringify(req.headers,null,4)}</pre>`);
    }
)

server.listen(port,host,()=> {
    console.log(`server działa na: http://${host}:${port}`);
});