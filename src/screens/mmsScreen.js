'use strict';

angular.module('mms.screen', [])
    .directive('mmsScreen', [
        function() {

            function MMSScreenController() {

            }

            return {
                restrict: 'E',
                controller: MMSScreenController,
                controllerAs: 'ctrl',
                bindToController: true,
                replace: true,
                transclude: true,
                templateUrl: '/mmsApp/templates/mmsScreen.html',
                require: null
            };
        }
    ]);
