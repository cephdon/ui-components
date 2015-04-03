angular.module("mms.ui-components.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("/mms-ui-components/templates/mmsScreen.html","<div class=\"mms-screen\">\n	\n	<!-- Stuff same accross the different pages -->\n	 <md-toolbar>\n      <div class=\"md-toolbar-tools\">\n        <md-button class=\"md-icon-button\" aria-label=\"Settings\">\n          <md-icon md-svg-icon=\"images/menu.svg\"></md-icon>\n        </md-button>\n        <h2>\n          <span>Toolbar with Icon Buttons</span>\n        </h2>\n        <span flex></span>\n        <md-button class=\"md-icon-button\" aria-label=\"Favorite\">\n          <md-icon md-svg-icon=\"images/favorite.svg\" style=\"color: greenyellow;\"></md-icon>\n        </md-button>\n        <md-button class=\"md-icon-button\" aria-label=\"More\">\n          <md-icon md-svg-icon=\"images/more_vert.svg\"></md-icon>\n        </md-button>\n      </div>\n    </md-toolbar>\n\n    <!-- Individual pages will be rendered-here -->\n	<ng-transclude></ng-transclude>\n\n	<!-- Stuff same accross the different pages -->\n	<div>Common footer</div>\n</div>");
$templateCache.put("/mms-ui-components/templates/dashboard.html","<div class=\"dashboard-screen\">\nDashboard comes here\n\n<div class=\"gridListdemoBasicUsage\">\n  <md-grid-list\n        md-cols-sm=\"1\" md-cols-md=\"2\" md-cols-gt-md=\"6\"\n        md-row-height-gt-md=\"1:1\" md-row-height=\"2:2\"\n        md-gutter=\"12px\" md-gutter-gt-sm=\"8px\" >\n    <md-grid-tile class=\"gray\"\n        md-rowspan=\"3\" md-colspan=\"2\">\n      <md-grid-tile-footer>\n        <h3>#1: (3r x 2c)</h3>\n      </md-grid-tile-footer>\n    </md-grid-tile>\n    <md-grid-tile class=\"green\">\n      <md-grid-tile-footer>\n        <h3>#2: (1r x 1c)</h3>\n      </md-grid-tile-footer>\n    </md-grid-tile>\n    <md-grid-tile class=\"yellow\">\n      <md-grid-tile-footer>\n        <h3>#3: (1r x 1c)</h3>\n      </md-grid-tile-footer>\n    </md-grid-tile>\n    <md-grid-tile class=\"blue\"\n        md-rowspan=\"2\">\n      <md-grid-tile-footer>\n        <h3>#4: (2r x 1c)</h3>\n      </md-grid-tile-footer>\n    </md-grid-tile>\n    <md-grid-tile class=\"red\"\n        md-rowspan=\"2\" md-colspan=\"2\">\n      <md-grid-tile-footer>\n        <h3>#5: (2r x 2c)</h3>\n      </md-grid-tile-footer>\n    </md-grid-tile>\n    <md-grid-tile class=\"green\"\n        md-rowspan=\"2\" >\n      <md-grid-tile-footer>\n        <h3>#6: (2r x 1c)</h3>\n      </md-grid-tile-footer>\n    </md-grid-tile>\n  </md-grid-list>\n</div>\n\n</div>");}]);