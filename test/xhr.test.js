/* global describe, beforeEach, afterEach, it */

'use strict';

var expect = require('expect.js');
var sinon = require('sinon');
var xhr = require('../src/js/xhr');

describe('xhr(options)', function () {

	var route = '/foo/bar';
	var headerValue = 'application/json';
	var body = '{ "some": "json" }';

	beforeEach(function () {
		this.server = sinon.fakeServer.create();
	});

	afterEach(function () {
		this.server.restore();
	});

	it('should return an instance of XMLHttpRequest', function () {
		expect(xhr()).to.be.an(XMLHttpRequest);
	});

	it('should execute the onSuccess function when the response is 200', function (done) {
		this.server.respondWith('FOO', route, [200,
			{ 'Content-Type': headerValue }, body ]);

		xhr({
			url: route,
			method: 'FOO',
			onError: function (res) {
				done(expect().fail('Called error when it should have been a success.'));
			},
			onSuccess: function (res){
				expect(JSON.parse(res)).to.be.a(Object);
				done();
			}});

		this.server.respond();
	});

	it('should execute the onSuccess function when the response is 201', function (done) {
		this.server.respondWith('FOO', route, [201,
			{ 'Content-Type': headerValue }, body ]);

		xhr({
			url: route,
			method: 'FOO',
			onError: function (res) {
				done(expect().fail('Called error when it should have been a success.'));
			},
			onSuccess: function (res){
				expect(JSON.parse(res)).to.be.a(Object);
				done();
			}});

		this.server.respond();
	});

	it('should execute the onSuccess function when the response is 202', function (done) {
		this.server.respondWith('FOO', route, [202,
			{ 'Content-Type': headerValue }, body ]);

		xhr({
			url: route,
			method: 'FOO',
			onError: function (res) {
				done(expect().fail('Called error when it should have been a success.'));
			},
			onSuccess: function (res){
				expect(JSON.parse(res)).to.be.a(Object);
				done();
			}});

		this.server.respond();
	});

	it('should execute the onSuccess function when the response is 204', function (done) {
		this.server.respondWith('FOO', route, [204,
			{ 'Content-Type': headerValue }, body ]);

		xhr({
			url: route,
			method: 'FOO',
			onError: function (res) {
				done(expect().fail('Called error when it should have been a success.'));
			},
			onSuccess: function (res){
				expect(JSON.parse(res)).to.be.a(Object);
				done();
			}});

		this.server.respond();
	});

	it('should execute the onError function when the response is 400', function (done) {
		this.server.respondWith('FOO', route, [400,
			{ 'Content-Type': headerValue }, body ]);

		xhr({
			url: route,
			method: 'FOO',
			onError: function (res){
				expect(JSON.parse(res)).to.be.a(Object);
				done();
			},
			onSuccess: function (res){
				done(expect().fail('Called success when it should have failed'));
			}});

		this.server.respond();
	});

	it('should execute the onError function when the response is 500', function (done) {
		this.server.respondWith('FOO', route, [500,
			{ 'Content-Type': headerValue }, body ]);

		xhr({
			url: route,
			method: 'FOO',
			onError: function (res){
				expect(JSON.parse(res)).to.be.a(Object);
				done();
			},
			onSuccess: function (res){
				done(expect().fail('Called success when it should have failed'));
			}});

		this.server.respond();
	});

	it('should use the provided XMLHttpRequest object', function () {
		var mockXMLHttpRequestInstance = sinon.stub({
			open: function () {},
			send: function () {}
		});

		xhr({ xhr: mockXMLHttpRequestInstance });

		expect(mockXMLHttpRequestInstance.open.calledOnce).to.be(true);
	});
});
