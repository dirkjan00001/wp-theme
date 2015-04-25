$(window).load(function(){
	if (document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) {

//		$('#access').prepend(get_svg_object("logo-white", "menu-logo"));

		$( ".icon-names" ).each(function() {
			var html='<div data-timeout="500" class="product-icons revealOnScroll">';
			var classname = $(this).text().split(' ');

			for (var j in classname){
				if (classname[j].substr(0, 5) == "icon-")
					//html+='<img class="product-icon" src="' + WPURLS.iconsurl + classname[j].substr(5)+ '.svg"></img>';
					html+= get_svg_object(classname[j].substr(5), "product-icon");
			}
			html+='</div>';

			$(this).parents(".column-image").prepend(html);
		});
	}
});


function get_svg_object(filename, html_class) {
	return '<object class="' + html_class + '" type="image/svg+xml" data="' + WPURLS.iconsurl + filename +'.svg"></object>';
}
