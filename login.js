//可以用来创建http服务
var http = require('http');
//创建一个服务
var server = http.createServer(function (request,response) {
    var requestUrl = request.url;
    switch(requestUrl) {
        case "/login":
            login(request,response);
            break;
        case "/post":
            post(request,response);
            break;
        default:
            response.writeHead(200,{"Content-Type":"text/html",
                "Transfer-Encoding":"utf-8"});
            response.write('<div>hahaha</div>'); response.end();
            break;
    }
});
//启动服务
server.listen(8090,function (error){
   console.log("成功监测到8090端口")
});
function login(request,response) {
    response.writeHead(200,{
        "Content-Type": "text/html"
    });
    response.write('<!DOCTYPE html>');
    response.write('<html lang="en">');
    response.write('<head>');
    response.write('    <meta charset="UTF-8">');
    response.write('    <title>登录表单</title>');
    response.write('</head>');
    response.write('<body>');
    response.write('<form action="/post" method="post"><table border="1px">');
    response.write('    <tr>');
    response.write('        <td>用户名</td>');
    response.write('        <td><input type="text" name="username"></td>');
    response.write('    </tr>');
    response.write('    <tr>');
    response.write('        <td>密码</td>');
    response.write('        <td><input type="password" name="password"></td>');
    response.write('    </tr>');
    response.write('    <tr>');
    response.write('        <td></td>');
    response.write('        <td><input type="submit"></td>');
    response.write('    </tr>');
    response.write('</table>');
    response.write('</form>');
    response.write('<div>更新的内容</div>')
    response.write('</body>');
    response.write('</html>');
    response.end();
}
var queryString = require('querystring');
function post(request,response) {
   var data = '';
   request.on('data',function (part) {
       data += part;
   });
   request.on('end',function () {
       console.log(data);
       var json = queryString.parse(data);
       console.log(json);
       if(json.username == 'admin' && json.password == '123') {
           response.write("<div>success</div>");
           response.end();
       } else {
           response.write("<div>no success</div>");
           response.end();
       }
   });
}