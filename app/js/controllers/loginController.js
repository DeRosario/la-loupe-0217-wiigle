angular.module('app')
    .controller('LoginController', function($scope, $state, Auth) {
        $scope.errors = [];

        $scope.login = function() {
            if ($scope.loginForm.$valid) {
                $scope.errors = [];
                Auth.login($scope.user.login).then(function(result) {
                    $state.go('anon.home');
                }).catch(function(err) {
                    $scope.errors.push(err);
                });
            }
        };
    });
