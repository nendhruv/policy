'use strict';

// Configuring the Articles module
angular.module('admin').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Admin', 'admin', 'dropdown', 'admin');
		Menus.addSubMenuItem('topbar', 'admin', 'Parsers', 'admin/parsers');
	}
]);