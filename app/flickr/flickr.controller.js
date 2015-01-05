(function() {
    'use strict';

    angular.module('flickrApp', ['ngMaterial'])
        .controller('FlickrListController', FlickrListController);

    FlickrListController.$inject = ['$http'];

    function FlickrListController($http) {
        var self = this;
    }
})();
