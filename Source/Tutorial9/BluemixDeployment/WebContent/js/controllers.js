/*

angular.module('starter', ['ionic', 'ui.router'])
  .controller('LoginCtrl', function ($scope, MongoRESTService, $state) {
    $scope.login = function (username, password) {
      console.log(username);
      var result = MongoRESTService.login(username, password, function (result) {
        console.log(result)
        if (result.length = 1) {
          $state.go('home');
        } else {
          alert('Sorry, check your credentials.')
        }

      });
    }
  })
  .controller('RegisterCtrl', function ($scope, MongoRESTService) {
    $scope.createAccount = function (data) {
      var id = MongoRESTService.register(data);
      console.log(id);

    }
  })
  .controller('HomeCtrl', function ($scope, MongoRESTService) {
    $scope.user = {};

  })

;
*/
