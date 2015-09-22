# o-xhr [![Build Status](https://travis-ci.org/Pearson-Higher-Ed/o-xhr.svg)](https://travis-ci.org/Pearson-Higher-Ed/o-xhr)

## Description

This component provides a lightweight, cross-browser abstraction for making XHR requests

### Example

```js
var xhr = require('o-xhr');

xhr({
  url: 'http://reqr.es/api/users',
  onSuccess: function (res){
    formatResponse(res);
  },
  onError: function (res) {
    formatResponse(res);
  }
});

```

The xhr function accepts a URL or a settings object as its only argument.  The settings object can contain the following options.

### url - Required

This should be a string to represent the path to the resource

### method - Optional

A string containing the HTTP verb you are using.  Please note that there is no validation on this field, so you should use care to make sure you are using valid methods.

### onSuccess - Optional

A callback function to be executed on successful completion of the request.

### onError - Optional

A callback function to be executed if the request returns an error.

### data - Optional

A string representing the body of the request.

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
