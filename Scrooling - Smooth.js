<script>
$(document).ready(function(){
	 //____Za svaki anchor/link u stranici #__//  
	 //____<div id="services"> - div gdje želiš ići__// 
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});
</script>