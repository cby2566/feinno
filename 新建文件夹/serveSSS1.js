var request = require("request");
//设置请求头没法解决raw格式的问题。但已经解决了，需要在option里直接使用json字段来传参
request(
  {
    url: `http://172.28.0.34:8080/api/goodsproduct/list?sysCode=zaShop`,
    method: "POST",
    // json: true,
    headers: {
      "content-type": "application/json",
      "sysCode": "zaShop"
    },
    // body: JSON.stringify({
    //   cateId: 0,
    //   displaySpuFlag: "",
    //   name: "",
    //   pageNum: 1,
    //   pageSize: 1
    // })
    json: {
	"cateId": 0,
	"displaySpuFlag": "",
	"name": "",
	"pageNum": 1,
	"pageSize": 1
	}
  },
  function(error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body.result);
    }
  }
);
