let http = require('http')
let users = [
  {id:44,name:'qunqun1'},
  {id:55,name:'qunqun2'},
  {id:66,name:'qunqun3'},
]
let server = http.createServer(function(req,res){
  res.setHeader('Access-Control-Allow-Origin','*')
  if(req.url === '/api/users'){
    res.end(JSON.stringify(users))
  }else{
    res.end('Not Fount')
  }
})

server.listen(3000,()=>{
  console.log('后端API已经启动在3000端口了！')
})