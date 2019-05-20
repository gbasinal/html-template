(function(app) { 
	'use strict'; 
	
	var Carousel = function() {};

	var sampleData = [
		{
			title:'Heading 1'
		},{
			title:'Heading 2'
		},{
			title:'Heading 3'
		},{
			title:'Heading 4'
		},{
			title:'Heading 5'
		},{
			title:'Heading 6'
		}
	]
	
	
	Carousel.prototype.init = function(props) {
		console.log(this)
		var _self = this;
		_self.create(null, {data:sampleData, isAnimated:true,});
		_self.owl();
		
	};

	Carousel.prototype.create = function(element, options) {
		var _self = this;
		var el = element || 'owl-carousel';
		var html = '';
		html += '<div class="'+el+'">'
		html += _self.item(options.data);
		html += '</div>';
		$('carousel').replaceWith(html);
	}

	Carousel.prototype.item = function(data, options) {
		var html = '';
		$.each(data, function(index, value){
			html += '<div class="item">';
			html += '	<h4>'+value.title+'</h4>';
			html += '</div>';
		});
		return html;
	}
	
	Carousel.prototype.owl = function(element, options){
		var el = element || '.owl-carousel';
		options = options || {
			loop:true,
			margin:10,
			nav:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:3
				},
				1000:{
					items:5
				}
			}
		}
		$(el).owlCarousel(options)
	}

	app.Carousel = Carousel;

	app.ready(function () {
		console.log('Carousel Ready');
		Carousel.prototype.init()
	})
    
})(window.app);