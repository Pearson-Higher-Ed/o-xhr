/* global describe, beforeEach, afterEach, it */

'use strict';

var expect = require('expect.js');
var sinon = require('sinon');
var xhr = require('../src/js/xhr');

describe('xhr(options)', function () {

	var route = '/foo/bar';
	var headerValue = 'application/json';
	var body = '{ "some": "json" }';
	var server;

	beforeEach(function () {
		server = sinon.fakeServer.create();
	});

	afterEach(function () {
		server.restore();
	});

	it('should return an instance of XMLHttpRequest', function () {
		expect(xhr('https://example.com')).to.be.an(XMLHttpRequest);
	});

	it('should throw an error when there are no arguments', function () {
		expect(function () { xhr(); }).to.throwException(/Expected 1 argument, got 0/);
	});

	it('should throw an error when the first argument is an object and the the url property is undefined', function () {
		expect(function () { xhr({});}).to.throwException(/The 'url' option is required/);
	});

	it('should execute the onSuccess function when the response is 200', function (done) {
		server.respondWith('FOO', route, [200,
			{ 'Content-Type': headerValue }, body ]);

		xhr({
			url: route,
			method: 'FOO',
			onError: function (req) {
				done(expect().fail('Called error when it should have been a success.'));
			},
			onSuccess: function (req){
				expect(JSON.parse(req.responseText)).to.be.a(Object);
				done();
			}});

		server.respond();
	});

	it('should execute the onSuccess function when the response is 201', function (done) {
		server.respondWith('FOO', route, [201,
			{ 'Content-Type': headerValue }, body ]);

		xhr({
			url: route,
			method: 'FOO',
			onError: function (req) {
				done(expect().fail('Called error when it should have been a success.'));
			},
			onSuccess: function (req){
				expect(JSON.parse(req.responseText)).to.be.a(Object);
				done();
			}});

		server.respond();
	});

	it('should execute the onSuccess function when the response is 202', function (done) {
		server.respondWith('FOO', route, [202,
			{ 'Content-Type': headerValue }, body ]);

		xhr({
			url: route,
			method: 'FOO',
			onError: function (req) {
				done(expect().fail('Called error when it should have been a success.'));
			},
			onSuccess: function (req){
				expect(JSON.parse(req.responseText)).to.be.a(Object);
				done();
			}});

		server.respond();
	});

	it('should execute the onSuccess function when the response is 204', function (done) {
		server.respondWith('FOO', route, [204,
			{ 'Content-Type': headerValue }, body ]);

		xhr({
			url: route,
			method: 'FOO',
			onError: function (req) {
				done(expect().fail('Called error when it should have been a success.'));
			},
			onSuccess: function (req){
				expect(JSON.parse(req.responseText)).to.be.a(Object);
				done();
			}});

		server.respond();
	});

	it('should execute the onError function when the response is 400', function (done) {
		server.respondWith('FOO', route, [400,
			{ 'Content-Type': headerValue }, body ]);

		xhr({
			url: route,
			method: 'FOO',
			onError: function (req){
				expect(JSON.parse(req.responseText)).to.be.a(Object);
				done();
			},
			onSuccess: function (req){
				done(expect().fail('Called success when it should have failed'));
			}});

		server.respond();
	});

	it('should execute the onError function when the response is 500', function (done) {
		server.respondWith('FOO', route, [500,
			{ 'Content-Type': headerValue }, body ]);

		xhr({
			url: route,
			method: 'FOO',
			onError: function (req){
				expect(JSON.parse(req.responseText)).to.be.a(Object);
				done();
			},
			onSuccess: function (req){
				done(expect().fail('Called success when it should have failed'));
			}});

		server.respond();
	});

	it('should use the provided XMLHttpRequest object', function () {
		var mockXMLHttpRequestInstance = {
			open: sinon.stub(),
			send: sinon.stub()
		};

		xhr({ xhr: mockXMLHttpRequestInstance, url: 'https://example.com' });

		expect(mockXMLHttpRequestInstance.open.calledOnce).to.be(true);
	});
});
