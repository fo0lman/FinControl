define([
	'jqueryui'
], function (jqueryui) {
	'use strict';

	$.datepicker.setDefaults({
		dateFormat: 'dd/mm/yy'
	});

	return $.datepicker;
});