(function() {
    'use strict';

    angular.module('flickrApp', ['ngRoute'])
        .config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];

    function routeConfig($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/flickr/flickr.html',
                controller: 'FlickrListController',
                controllerAs: 'vm'
            })
            .otherwise({redirectTo: '/'});
    }
})();
