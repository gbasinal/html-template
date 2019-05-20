(function(app) { 
	'use strict'; 
	
	var Modal = function() {};
  
	Modal.prototype.init = function() {
        app.Modal.prototype.openModal();
	};

    app.Modal = Modal;

    app.ready(function () {
        console.log('Modal Ready');
        Modal.prototype.init()
    })

})(window.app);