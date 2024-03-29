import $ from 'jquery'


var d = $('.animated')
d.each(function (i, v) {
  $(this).waypoint(function () {
    $(v).addClass('on')
  }, {
    offset: '100%'
  })
})

$(window).bind('scroll load orientationchange reload resize ready', function() {
    var win = $(window).scrollTop() + $(window).height();


  $('.fade-up, .fade-in').each(function(){
    if(win > $(this).offset().top ){
      $(this).addClass("on");
    }else{
      $(this).removeClass("on");
    }
  });

  $('.fade-g').each(function(){
    if(win > $(this).offset().top ){
      $(this).addClass("on");
      $(this).find("> *").each(function(i){
        $(this).delay(i*250).queue(function(){
            $(this).addClass("on").dequeue();
        }); //('transition-delay', '.' + (i*18) + 's');
       });
    }else{
      $(this).removeClass("on");
      $(this).find("> *").each(function(i){
        $(this).removeClass("on");
      });
    }
  })
})

const moveScrollTop = () => { 
  $('html, body').animate({
    scrollTop: 0
  }, 200);
};

$('.gnb a').click(function(){
  $('header').removeClass('bottom')

  moveScrollTop();
})
/* $('.gnb a').click(function(){
  moveScrollTop();
}) */