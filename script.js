let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 60){
        document.querySelector('#scroll-top').classList.add('active');
    }else{
        document.querySelector('#scroll-top').classList.remove('active');
    }

    if(window.scrollY > 60){
        document.querySelector('.header').classList.add('active');
    }
    else{
        document.querySelector('.header').classList.remove('active');
    }

}

$(document).ready(function(){

    $(window).on('scroll load', function(){

        $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let id = $(this).attr('id');

            if(top >= offset && top < offset + height){
                $('.navbar a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }

        });

    });

});



var swiper = new Swiper('.gallery-slider', {
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
      },
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    grabCursor: true,
    loop:true,  
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        634: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
    },
});


let accordion = document.querySelectorAll('.accordion-container .accordion');

accordion.forEach(acco =>{
    acco.onclick = () =>{
        accordion.forEach(subAcco => {subAcco.classList.remove('active')});
        acco.classList.add('active');
    }
});
