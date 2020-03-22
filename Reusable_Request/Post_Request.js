'use strict';
const frisby = require('frisby');


var frisbyPostRequest = function() {
    
    this.sendPostRequest = function(url,body){
       return frisby.post(url,  body)
    };
   
}; 
module.exports = new frisbyPostRequest();