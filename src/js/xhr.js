'use strict';

module.exports = createXhr;

function createXhr(options) {
	options = options || {};

	options.url = options.url || '';
	options.method = options.method || 'GET';
	options.onSuccess = options.onSuccess || noop;
	options.onError = options.onError || noop;
	options.data = options.data || '';

	var request = options.xhr || new XMLHttpRequest();

	function handleReadystatechange() {
		if (request.readyState !== 4) return;
		if (!isSuccess(request.status)) options.onError(request.responseText);
		else options.onSuccess(request.responseText);
	}

	request.open(options.method, options.url, true);
	request.onreadystatechange = handleReadystatechange;
	request.send(options.data);

	return request;
}

function noop() { }

function isSuccess(status) {
	return status >= 200 && status <= 299;
}
