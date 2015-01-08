(function() {
    'use strict';

    angular.module('app.flickr', ['ngMaterial'])
        .controller('ListController', ListController);

    ListController.$inject = ['$scope', '$http'];

    function ListController($scope, $http) {
        $scope.results = [];
        $scope.isSearching = false;

        $scope.search = function() {
            $scope.isSearching = true;
            $http({
                method: 'GET',
                url: 'https://api.flickr.com/services/rest',
                params: {
                    method: 'flickr.photos.search',
                    api_key: '15b6709e54ae9bc22a00b3cbf8d48eec',
                    text: $scope.searchTerm,
                    format: 'json',
                    nojsoncallback: 1
                }
            }).success(function(data) {
                $scope.results = data;
                $scope.isSearching = false;
            }).error(function(error) {
                console.error(error);
                $scope.isSearching = true;
            });
        };
    }
})();
