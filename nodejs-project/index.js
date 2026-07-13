import http from "node:http";
import * as fs from "node:fs"
import fsPromise from "node:fs/promises"
import { type } from "node:os";
import { compressDeflate } from "node:zlib/iter";

const server = http.createServer(async (req,res) => {
    res.writeHead(200,{
        "content-type":"text/html"
    })
    if(req.url === "/"){
        const index = await fs.createReadStream('./index.html');
        index.pipe(res);
    }

    else if(req.url === '/about'){
        const index1 = await fs.createReadStream('./about.html');
        index1.pipe(res);        
    }
    else if(req.url === '/contact-me'){
        const index2 = await fs.createReadStream('./contact-me.html')
        index2.pipe(res);
    }
    else {
        const index3 = await fs.createReadStream('./404.html')
        index3.pipe(res);
    }
})

server.listen(8080,()=>{
    console.log("server is runnig on port 8080");
})








/*
  optimized code 

  import http from "node:http";
import * as fs from "node:fs";

const server = http.createServer((req, res) => {

    let filePath = "./404.html";
    let statusCode = 404;

    if (req.url === "/") {
        filePath = "./index.html";
        statusCode = 200;
    }
    else if (req.url === "/about") {
        filePath = "./about.html";
        statusCode = 200;
    }
    else if (req.url === "/contact-me") {
        filePath = "./contact-me.html";
        statusCode = 200;
    }

    res.writeHead(statusCode, {
        "Content-Type": "text/html"
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
});

server.listen(8080, () => {
    console.log("Server is running on port 8080");
});
*/