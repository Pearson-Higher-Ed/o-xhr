# o-xhr [![Build Status](https://travis-ci.org/Pearson-Higher-Ed/o-xhr.svg)](https://travis-ci.org/Pearson-Higher-Ed/o-xhr)

## Description

This component provides a lightweight, cross-browser abstraction for making XHR requests.

### Example

```js
var xhr = require('o-xhr');

xhr({
  url: 'http://reqr.es/api/users',
  onSuccess: function (request){
    formatResponse(request.responseText);
  },
  onError: function (request) {
    formatResponse(request.responseText);
  }
});

```

The xhr function accepts a URL or a settings object as its only argument.  The settings object can contain the following options.

### url - Required

The URL of the request.

### method - Optional

The method that `XMLHttpRequest` should be opened with. Defaults to `GET`.

### onSuccess - Optional

A callback function with signature `function(request)`, where request is the raw XMLHttpRequest instance. This function will be called if the request succeeds.

### onError - Optional

A callback function with signature `function(request)`, where request is the raw XMLHttpRequest instance. This function will be called if the request fails, including if the response has a non-200 status.

### data - Optional

The body of the request.

### xhr - Optional

An instance that implements the XMLHttpRequest API. This can be used to mock XMLHttpRequest:

```js
xhr({
	url: 'http://example.com',
	xhr: new MockXMLHttpRequest()
});
```

## License

This software is published by Pearson Higher Education under the [MIT license](http://opensource.org/licenses/MIT).
