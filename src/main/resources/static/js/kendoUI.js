angular.module('kendo', ["kendo.directives", "ui.router"])
    .config(function($stateProvider) {
        var helloState = {
            name: 'hello',
            url: '/hello',
            template: '<h3>hello world!</h3>'
        }

        var aboutState = {
            name: 'about',
            url: '/about',
            template: '<h3>Its the UI-Router hello world app!</h3>'
        }

        $stateProvider.state(helloState);
        $stateProvider.state(aboutState);
    })
    .controller('home', function($scope, $state) {
        $scope.greeting = {id: 'xxx', content: 'Hello World!'}
        $scope.showDataVis = function(){
            $state.transitionTo('hello');
        };
    });

