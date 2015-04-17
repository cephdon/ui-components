'use strict';

angular.module('mms.screens.overview', [
        'ngMaterial'
    ])
    .directive('overview', [
        function() {

            function OverviewController() {

                this.state = 'welcome';

            }

            OverviewController.prototype.toggleState = function() {

                if (this.state === 'welcome') {

                    this.state = 'good_bye';

                } else {

                    this.state = 'welcome';                    

                }

            };

            return {
                restrict: 'E',
                controller: OverviewController,
                controllerAs: 'ctrl',
                bindToController: true,
                replace: true,
                transclude: false,
                templateUrl: '/mms-ui-components/templates/overview.html',
                require: null
            };
        }
    ]);
