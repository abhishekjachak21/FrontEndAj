var MyAppu = angular.module("appu",[]);

MyAppu.controller("myCtrol",function($scope){
    $scope.name= "abhya";
    $scope.age= 21;
})


MyAppu.controller("repeatCtrl",function($scope){
    $scope.fruits = ['mango', 'bananan', 'cherry', 'apple'];
    $scope.stuInfo = [{name:'Abhi', age:21},{name:'Sneha', age:20}];
    $scope.stuData = {name:'Abhi', age:21};
})


MyAppu.controller("hideNshow",function($scope){
    $scope.geniusIQ = [24,67,89,111, 134, 149, 150];
})
