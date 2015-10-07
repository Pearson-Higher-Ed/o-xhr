import xhr from '../../main';

document.getElementById('get').addEventListener('click', e => {

	function renderResponse(request) {
		document.getElementById('results')
			.textContent = request.responseText;
	}

	xhr({
		url: document.getElementById('url').value,
		method: 'GET',
		onError: renderResponse,
		onSuccess: renderResponse
	});

	e.preventDefault();
});
