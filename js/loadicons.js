$(window).load(function(){
	if (document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) {
		$( ".icon-names" ).each(function() {
			var html='<div class="product-icons">';
			var classname = $(this).text().split(' ');

			for (var j in classname){
				if (classname[j].substr(0, 5) == "icon-")
					html+='<img class="product-icon" src="' + WPURLS.iconsurl + classname[j].substr(5)+ '.svg"></img>';
			}
			html+='</div>';

			$(this).parents(".column-image").prepend(html);
		});
	}
});
