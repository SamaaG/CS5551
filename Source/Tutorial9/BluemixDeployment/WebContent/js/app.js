angular.module('starter', ['ionic','ngCordova'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();} });    })
.controller('AppCtrl', function($scope, $ionicModal, $cordovaToast, $http, $httpParamSerializerJQLike){
  
/*    
    //The constructor pattern
    var Title = getElementById("title");
    var Address = getElementById("address");
    var Image = getElementById("img");
    
    var loc = new Location(Title, Address, Image);

    function Location(title, address, image){
        this.title = title;
        this.address = address;
        this.image = image;
    }
    
//the prototype pattern
    var myCar = {
 
  name: "Ford Escort",
 
  drive: function () {
    console.log( "Weeee. I'm driving!" );
  },
 
  panic: function () {
    console.log( "Wait. How do you stop this thing?" );
  }
 
};
 
// Use Object.create to instantiate a new car
var yourCar = Object.create( myCar );
 
// Now we can see that one is a prototype of the other
console.log( yourCar.name );
    
    //end
    
  //MVC pattern
    //having the models the views and the controllers
    //in different files is by itself a pattern
    */
 var loggedIn = false;
    if (loggedIn){
   function showLocs(){     
var locReq = new XMLHttpRequest();
locReq.open("GET", "https://api.mongolab.com/api/1/databases/asedemo/collections/locs?&apiKey=T3Xt8EWGKBIuFZL_iVclk3noEhpVVU9y", false);
locReq.send(null); 
$scope.locs = JSON.parse(locReq.responseText);
   }
    };
//$scope.pageClass = 'register';
    
$ionicModal.fromTemplateUrl('views/newLoc.html', function (modal){
 $scope.locModal = modal;
},{
   scope: $scope
});
    
$scope.showToast = function(message, duration, location) {
        $cordovaToast.show(message, duration, location).then(function(success) {
            console.log("The toast was shown");
        }, function (error) {
            console.log("The toast was not shown due to " + error);
        });
    }

$scope.createLoc = function (newTitle, newAddress, newImage) {
    $http({
    method: 'POST',
    url : 'https://api.mongolab.com/api/1/databases/asedemo/collections/locs?apiKey=T3Xt8EWGKBIuFZL_iVclk3noEhpVVU9y',
    data: JSON.stringify({
                title: newTitle,
                address: newAddress,
                img: newImage
            }),
    contentType: "application/json"
})
    document.getElementById("locForm").reset();
    if(loggedIn){showLocs();}
    $scope.locModal.hide();
    
};

$scope.newLoc = function(){
    $scope.locModal.show();
};

$scope.closeNewLoc = function(){
    $scope.locModal.hide();
};
    
 
    
$ionicModal.fromTemplateUrl('views/openLogin.html', function (modal){
 $scope.loginModal = modal;
},{
   scope: $scope
});
    
$scope.openLogin = function(){
    $scope.loginModal.show();
};

$scope.closeLogin = function(){
    $scope.loginModal.hide();
}; 

$scope.login = function(username, userpassword) {
    
    $http.get('https://api.mongolab.com/api/1/databases/asedemo/collections/users?q={"name":"username", "password":" userpassword"}&apiKey=T3Xt8EWGKBIuFZL_iVclk3noEhpVVU9y'
).then(function successCallback(response){
        loggedIn =true;
        showLocs();
        $scope.name = "Welcome, " + username + "!";
        $scope.loginModal.hide();
        document.getElementById("loginForm").reset();
        
    }, function errorCallback(response){$scope.loginErr="There was a problem logging in, please try again!"});
};
    
 
    
$ionicModal.fromTemplateUrl('views/openRegister.html', function (modal){
 $scope.registerModal = modal;
},{
   scope: $scope
});
    
$scope.openRegister = function(){
    $scope.registerModal.show();
};

$scope.closeRegister = function(){
    $scope.registerModal.hide();
}; 
    
$scope.register = function(username, password, email) {
   console.log("inside login function");
$http({
    method: 'POST',
    url : 'https://api.mongolab.com/api/1/databases/asedemo/collections/users?apiKey=T3Xt8EWGKBIuFZL_iVclk3noEhpVVU9y',
    data: JSON.stringify({
                name: username,
                password: password,
                email: email
            }),
    contentType: "application/json"
})
document.getElementById("registerForm").reset();
$scope.registerModal.hide();
};
    
});