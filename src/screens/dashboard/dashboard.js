'use strict';

angular.module('mms.screens.dashboard', [])
    .directive('dashboard', [
        function() {

            function DashboardController() {

                this.state = 'welcome';

            }

            DashboardController.prototype.toggleState = function() {

                if (this.state === 'welcome') {

                    this.state = 'good_bye';

                } else {

                    this.state = 'welcome';                    

                }

            };

            return {
                restrict: 'E',
                controller: DashboardController,
                controllerAs: 'ctrl',
                bindToController: true,
                replace: true,
                transclude: false,
                templateUrl: '/mmsApp/templates/footerDrawer.html',
                require: null
            };
        }
    ]);
