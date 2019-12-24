var http = require('http');
var request = require("request");
var port = 7878;

/**
 * var app = require('../app');
 * var server = http.createServer(app);
 */

//var data = { key: 'hello', value: 'world'};

var server = http.createServer(function(request,response){
	if(request.url == '/favicon.ico')
		return;
	var a = request.url
	var arr = a.substr(2,a.length).split('&').map((i)=>{
		//console.log(i.substr(i.indexOf('=')+1,i.length))
		return i.substr(i.indexOf('=')+1,i.length)
		})
    response.writeHead(200,{
        'content-type': 'application/json'
    });
	
	//console.log(request.url)
	test(function(data){
		
		//response.write('Hello World -- 0');
		//response.end('sss');
		response.end(JSON.stringify(data));
	},arr[0],arr[1]);
	
    //response.write('Hello World -- 0');
    //response.end(JSON.stringify(data));
});

server.listen(port);
console.log('world');

function test(fn,num,size){
	request(
	  {
		url: `http://172.28.0.34:8080/api/goodsproduct/list?sysCode=zaShop`,
		method: "POST",
		headers: {
		  "content-type": "application/json",
		  "sysCode": "zaShop"
		},
		json: {
		"cateId": 0,
		"displaySpuFlag": "",
		"name": "",
		"pageNum": num,
		"pageSize": size
		}
	  },
	  function(error, response, body) {
		if (!error && response.statusCode == 200) {
		  console.log(body.result);
		  fn(body.result.result)
		}
	  }
	);
}