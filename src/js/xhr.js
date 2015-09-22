'use strict';

module.exports = createXhr;

function createXhr(options) {
	options = options || {};

	options.url = options.url || '';
	options.method = options.method || 'GET';
	options.onComplete = options.onComplete || noop;
	options.onError = options.onError || noop;
	options.data = options.data || '';

	function handleReadystatechange() {
		if (r.readyState !== 4) return;
		if (!isSuccess(r.status)) options.onError(r.responseText);
		else options.onComplete(r.responseText);
	}

	var r = options.xhr || new XMLHttpRequest();

	r.open(options.method, options.url, true);
	r.onreadystatechange = handleReadystatechange;
	r.send(options.data);

	return r;
}

function noop() { }

function isSuccess(status) {
	return status >= 200 && status <= 299;
}
