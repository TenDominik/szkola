const http=require('http');
const path=require('path');
const fs=require('fs');

const host='127.0.0.1';
const port=5555;
function response(req,res)
{
    const html=path.join(__dirname,'index.html');
    const css=path.join(__dirname,'style.css');
    const fc=path.join(__dirname,'favicon.ico');
    const js=path.join(__dirname,'script.js');

    switch(req.url){
        case '/':
        {
            fs.readFile(html, (err,content)=>
            {
                if(!err)
                {
                    res.writeHead(200, {'Content-Type':'text/html, charset=utf-8'});
                    res.end(`${content}`);
                    console.log(`ładujemy plik ${html}`);
                }
                else
                {
                    res.writeHead(404, {'Content-Type':'text/html, charset=utf-8'});
                    res.end('beka z cb lol!!!');
                    console.dir(err);
                    console.log(`coś poszło nie tak`);
                }
            });
            break;
        }

        case '/style.css':
        {
            fs.readFile(css, (err,content)=>
            {
                if(!err)
                {
                    res.writeHead(200, {'Content-Type':'text/css, charset=utf-8'});
                    res.end(`${content}`);
                    console.log(`ładujemy plik ${css}`);
                }
                else
                {
                    res.writeHead(404, {'Content-Type':'text/html, charset=utf-8'});
                    res.end('beka z cb lol!!!');
                    console.dir(err);
                    console.log(`coś poszło nie tak`);
                }      
            });
            break;
        }

        case '/script.js':
            {
                fs.readFile(js, (err,content)=>
                {
                    if(!err)
                    {
                        res.writeHead(200, {'Content-Type':'text/js, charset=utf-8'});
                        res.end(`${content}`);
                        console.log(`ładujemy plik ${js}`);
                    }
                    else
                    {
                        res.writeHead(404, {'Content-Type':'text/html, charset=utf-8'});
                        res.end('beka z cb lol!!!');
                        console.dir(err);
                        console.log(`coś poszło nie tak`);
                    }      
                });
                break;
            }

        case '/favicon.ico':
            {
                fs.readFile(fc, (err,content)=>
                {
                    if(!err)
                    {
                        res.writeHead(200, {'Content-Type':'x-icon'});
                        res.end(`${content}`);
                        console.log(`ładujemy plik ${fc}`);
                    }
                    else
                    {
                        res.writeHead(404, {'Content-Type':'text/html, charset=utf-8'});
                        res.end('beka z cb lol!!!');
                        console.dir(err);
                        console.log(`coś poszło nie tak`);
                    }      
                });
                break;
            }
    }
    
    /*
    if(req.url==='/')
    {
        fs.readFile(html, (err,content)=>
        {
            if(!err)
            {
                res.writeHead(200, {'Content-Type':'text/html, charset=utf-8'});
                res.end(`${content}`);
                console.log(`ładujemy plik ${html}`);
            }
            else
            {
                res.writeHead(404, {'Content-Type':'text/html, charset=utf-8'});
                res.end('beka z cb lol!!!');
                console.dir(err);
                console.log(`coś poszło nie tak`);
            }
        });
    }

    
    if(req.url==='/style.css')
    {
        fs.readFile(css, (err,content)=>
        {
            if(!err)
            {
                res.writeHead(200, {'Content-Type':'text/css, charset=utf-8'});
                res.end(`${content}`);
                console.log(`ładujemy plik ${css}`);
            }
            else
            {
                res.writeHead(404, {'Content-Type':'text/html, charset=utf-8'});
                res.end('beka z cb lol!!!');
                console.dir(err);
                console.log(`coś poszło nie tak`);
            }      
        });
    }

    
    if(req.url==='/script.js')
    {
        fs.readFile(js, (err,content)=>
        {
            if(!err)
            {
                res.writeHead(200, {'Content-Type':'text/js, charset=utf-8'});
                res.end(`${content}`);
                console.log(`ładujemy plik ${js}`);
            }
            else
            {
                res.writeHead(404, {'Content-Type':'text/html, charset=utf-8'});
                res.end('beka z cb lol!!!');
                console.dir(err);
                console.log(`coś poszło nie tak`);
            }      
        });
    }

    
    if(req.url==='/favicon.ico')
    {
        fs.readFile(fc, (err,content)=>
        {
            if(!err)
            {
                res.writeHead(200, {'Content-Type':'x-icon'});
                res.end(`${content}`);
                console.log(`ładujemy plik ${fc}`);
            }
            else
            {
                res.writeHead(404, {'Content-Type':'text/html, charset=utf-8'});
                res.end('beka z cb lol!!!');
                console.dir(err);
                console.log(`coś poszło nie tak`);
            }      
        });
    }
    */
}

const serwer=http.createServer(response);
serwer.listen(port,host, ()=>{console.log(`Otwórz przeglądarke i wpisz adres ${host}:${port}`)});
