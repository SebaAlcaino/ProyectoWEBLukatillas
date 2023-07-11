$(document).ready(function(){
    $('.carousel').carousel({
      interval: 2000, 
      pause: "hover" 
    });
  });

  $('.galeria').magnificPopup({
    delegate:'a',
    type:'image',
    gallery:{
      enabled:true
    }
  });
