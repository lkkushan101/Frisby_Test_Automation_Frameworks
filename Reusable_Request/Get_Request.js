'use strict';
const frisby = require('frisby');


var frisbyGetRequest = function() {
    
    this.sendGetRequest = function(url){
     return frisby.get(url)
    };
   
}; 
module.exports = new frisbyGetRequest();