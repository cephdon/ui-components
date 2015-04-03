'use stric';

require('./screens/mmsScreen');

require('./screens/dashboard/dashboard');

angular.module('mms.screensDemo', [
	'mms.screen',
	'mms.screens.dashboard',
	'mms.ui-components.templates'
	]);