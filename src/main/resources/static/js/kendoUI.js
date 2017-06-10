angular.module('kendo', ["kendo.directives"])
    .controller('home', function($scope) {
        $scope.greeting = {id: 'xxx', content: 'Hello World!'}
    })