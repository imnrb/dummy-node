const http=require('http');
const server=http.createServer((req,res)=>{
if(req.url==='/')
{
    res.end('welcome to home page');
}
else if(req.url==='/about')
{
    res.end('this is about')
}
else{
res.end(`<h1>Oops ! wrong place </h1>  <p> we cant seem to find the page you are looking for</p> 
<a href="/">back home</a>`)
}
})
server.listen(5000)