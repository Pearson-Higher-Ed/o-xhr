/*global require*/
'use strict';

var xhr =  require('../../main');

document.getElementById('get').addEventListener('click', handleGetBtnClick);

function handleGetBtnClick(e) {
	e.preventDefault();

	xhr({
		url: document.getElementById('url').value,
		method: 'GET',
		onError: renderResponse,
		onSuccess: renderResponse
	});
}

function renderResponse(request) {
	document.getElementById('results')
		.textContent = request.responseText;
}
