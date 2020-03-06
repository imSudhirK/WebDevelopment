$(document).ready(function(){
	$('.menu-toggler').on('click', function(){
		$(this).toggleClass('open');
		$('.top-nav').toggleClass('open');
	});
/*
	$('.top-nav .nav-link').on('click', function(){
		$('.menu-toggler').removeClass('open');
		$('.top-nav').removeClass('open');
	});


	$('nav a[href*="#"]').on('click', function(){
		$('html, body').animate(keyframes:{
			scrollTop: $($(this).attr('href')).offset().top - 100
		}, options: 2000);
	});

	$('#up').on('click', function(){
		$('html, body').animate(keyframes:{
			scrollTop: 0
		}, options: 2000);
	});
	*/
	
}); 

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var table = this.nextElementSibling;
    if (table.style.maxHeight){
      table.style.maxHeight = null;
    } else {
      table.style.maxHeight = table.scrollHeight + "px";
    } 
  });
}


