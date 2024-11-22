const http = require('http')

const server=http.createServer((req,res)=>{

    if(req.url=='/favicon.ico'){
        const msg='Motherchod favicon mat bhej , nehi to maa behen ekkar dunha, braj ka'
        console.log(msg)
        return res.end(msg)
    }
   
    if(req.url=='/about'){
        return res.end('About Page')
    }
    
    if(req.url=='/profile'){
        return res.end('Profile Page')
    }
    if(req.url=='/'){
        return res.end('Home Page')
    }
    console.log(req.url)
})

server.listen(3000)