angular.module('starter', ['ionic','ngCordova'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();} });    })
.controller('LocCtrl', function($scope, $ionicModal, $cordovaToast){
  
    $scope.locs= [
        {title: 'Home',
         address: '628 Scott ave, Kansas City, MO',
         img: 'img/home.png'
        },
        {title: 'Work',
         address: '112 Wornall, Overland Park, KS',
         img: 'img/work.png'
        },
        {title: 'Anna\'s house',
         address: '78 E Santa Fe, Kansas City, MO',
         img: 'img/anna.png'
        } ];
    
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


$scope.createLoc = function (loc) {
    $scope.locs.push({
        title: loc.title,
        address: loc.address,
        img: loc.img
    });
    $scope.locModal.hide();
    
    loc.title="";
    loc.address="";
    loc.img="";
};

$scope.newLoc = function(){
    $scope.locModal.show();
};

$scope.closeNewLoc = function(){
    $scope.locModal.hide();
};
});