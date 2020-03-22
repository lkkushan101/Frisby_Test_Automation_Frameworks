'use strict';


const frisby = require('frisby');


var frisbyDeleteRequest = function() {
    
    this.sendDeleteRequest = function(url){
      return frisby.delete(url);
	 
    };
   
}; 
module.exports = new frisbyDeleteRequest();