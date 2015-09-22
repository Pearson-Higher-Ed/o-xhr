'use strict';

var noop = function () {};

module.exports = function (options) {
	options = options || {};

	var successCodes = [ 200, 201, 202, 204 ];

	options.url = options.url || "";
	options.method = options.method || "GET";
	options.onComplete = options.onComplete || noop;
	options.onError = options.onError || noop;
	options.data = options.data || '';

	var r = new XMLHttpRequest();
	r.open(options.method, options.url, true);
	r.onreadystatechange = function () {
		if (r.readyState !== 4) {
			return;
		}
		else{
			if (successCodes.indexOf(r.status) === -1) {
				options.onError(r.responseText);
			}
			else {
				options.onComplete(r.responseText);
			}
		}
	};
	r.send(options.data);
	return r;
};
