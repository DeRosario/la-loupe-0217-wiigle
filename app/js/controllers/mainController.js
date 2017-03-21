angular.module('app')
    .controller('MainController', function($scope, $http) {
        /* Here is your main controller */

        $scope.query = "";
        $scope.goSearch = function() {

            $http.get("http://api.giphy.com/v1/gifs/search?q=" + $scope.query + "&api_key=dc6zaTOxFJmzC ")
                .then(function(response) {
                    $scope.gif = response.data.data;
                    console.log($scope.gif);
                });
$http.get("http://www.omdbapi.com/?t=" + $scope.query + "&tomatoes=true&plot=full") .then(function(response) { $scope.details = response.data; });
        };
    });
