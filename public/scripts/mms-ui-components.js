(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('./screens/mmsScreen');

require('./screens/dashboard/dashboard');

require('./screens/overview/overview');

angular.module('mms.screensDemo', [
	'mms.screen',
	'mms.screens.dashboard',
	'mms.screens.overview',
	'mms.ui-components.templates'
	]);
},{"./screens/dashboard/dashboard":2,"./screens/mmsScreen":3,"./screens/overview/overview":4}],2:[function(require,module,exports){
'use strict';

angular.module('mms.screens.dashboard', [
        'ngMaterial'
    ])
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
                templateUrl: '/mms-ui-components/templates/dashboard.html',
                require: null
            };
        }
    ]);

},{}],3:[function(require,module,exports){
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
                templateUrl: '/mms-ui-components/templates/mmsScreen.html',
                require: null
            };
        }
    ]);

},{}],4:[function(require,module,exports){
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

},{}]},{},[1])


//# sourceMappingURL=mms-ui-components.js.map