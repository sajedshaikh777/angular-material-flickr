(function() {
    'use strict';

    angular.module('app.flickr', ['ngRoute'])
        .config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];

    function routeConfig($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/flickr/flickr.html',
                controller: 'ListController',
                controllerAs: 'vm'
            })
            .otherwise({redirectTo: '/'});
    }
})();
