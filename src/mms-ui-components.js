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