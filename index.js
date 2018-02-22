//可以用来创建http服务
var http = require("http");
//创建一个服务
var server = http.createServer(function (request,response) {
    console.log(request.url);
    //处理请求与响应
    response.writeHeader(200,{
        "content-type": "text/html",
        "key": "value"
    });
    response.write("<h1>hahaha</h1>");
    response.end();
});
//启动服务
server.listen(8080,function (error) {
    console.log("成功监听8080端口");
});
