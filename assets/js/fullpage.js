(function(app) { 
	'use strict'; 
	
	var Fullpage = function() {};
	
	Fullpage.prototype.init = function() {
        
        $('#fullpage').fullpage({
            licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
            onLeave: function(index, nextIndex, direction) {
            },
            afterLoad: function(anchorLink, index) {
            },
            afterRender: function() {
                console.log('Fullpage Render');
            },
            
            
        });

	};

    app.Fullpage = Fullpage;

    app.ready(function () {
        console.log('Fullpage Ready');
        Fullpage.prototype.init()
    })

})(window.app);