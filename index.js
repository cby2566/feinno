var app = angular.module('myApp', []);
app.controller('myCtrl', function($rootScope,$scope) {
    $scope.name = "zhangshan";
    $scope.getName=(name)=>{
        console.log($scope.name,name);
        return $scope.name;
    }
    //基于事件通信
    $scope.$broadcast("some", {msg:"父 Controller 往子 Controller"});

    $scope.$on("someKIN", function(event, data) {
        // 这里取到发送过来的数据 data
        console.log(data);
    });

});
// 控制器父子通信
app.controller('zi', function($rootScope,$scope){

    $scope.getName("::zi")
    $scope.arrayol=[1,2,3,4,5];

    //基于事件通信
    $scope.$emit("someKIN", {msg:"子 Controller 往父 Controller1"});
    $scope.$on("some", function(event, data) {
        // 这里取到发送过来的数据 data
        console.log(data,123);
    });
});
//兄弟控制器通信
app.controller('br', function($rootScope,$scope,Data,DataS1){

    console.log(Data,DataS1);
    $scope.name=Data.name+"-"+DataS1.data;
});
//注入服务1号
app.factory('Data', function(){
    return {
        name: 'htf'
    };
});
//注入服务2号
app.service('DataS1',function() {
    return {dara:'msg'}
});

//依赖注入