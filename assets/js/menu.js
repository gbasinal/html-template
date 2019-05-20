(function(app) { 
	'use strict'; 
	
    var Menu = function() {};
    
	Menu.prototype.init = function() {
	};

    app.Menu = Menu;

    app.ready(function () {
        Menu.prototype.init()
    })

})(window.app);