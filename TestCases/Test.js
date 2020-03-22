const frisby = require('frisby');
const { expect } = require('chai');
var data = require('../Data/data.json');
var frisbyGetRequest = require('../Reusable_Request/Get_Request.js');
var frisbyDeleteRequest = require('../Reusable_Request/Delete_Request.js');
var frisbyPostRequest = require('../Reusable_Request/Post_Request.js');
require('mocha');
describe('When I access the employees via web service', function() {
it('should return all the employees', function () {
		frisbyGetRequest.sendGetRequest(data.url_get)
		.expect('status', 200);
	})
});
describe('Deleting an employee via web services', function() {
it('should create an employee', function () {
  // Return the Frisby.js Spec in the 'it()' (just like a promise)
	frisbyDeleteRequest.sendDeleteRequest(data.url_delete)
    .expect('status',200);
	console.log('status');
	})
});
describe('Adding an employee via web services', function() {
it('should delete an employee', function () {
  // Return the Frisby.js Spec in the 'it()' (just like a promise)
	frisbyPostRequest.sendPostRequest(data.url_post, {first_name: data.first_name, last_name: data.last_name, email : data.email})
    .expect('status',201);
	console.log('status');
	})
});

