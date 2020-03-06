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

	*/	
}); 

var index = 1;
showImage(1);
function plusIndex(n){
  index = index + 1;
  showImage(index); 
}
function showImage(n){ 
  var imagelist = document.getElementsByClassName("slideImage");
  if(n > imagelist.length){ index = 1;}
  if(n < 1){ index = imagelist.length;} 
  for(var i = 0; i < imagelist.length; i++){
  imagelist[i].style.display="none";
  }
  imagelist[index-1].style.display="block";  
}

autoSlide();
function autoSlide(){
  var imagelist = document.getElementsByClassName("slideImage");
  for(var i = 0; i < imagelist.length; i++){
  imagelist[i].style.display="none";
  }
  if(index > imagelist.length){ index = 1 }  
  imagelist[index-1].style.display="block";
  index++;
  setTimeout(autoSlide, 2000);   
}
  