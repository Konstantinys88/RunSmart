// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1200,
//         // adaptiveHeight: true,
//         prevArrow:'<button type="button" class="slick-prev"><img src="img/left.svg"></button>',
//         nextArrow:'<button type="button" class="slick-next"><img src="img/right.svg"></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                     dots: true,
//                     arrows: false
//                 }
//             }
//         ]
//       });
// });


const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
    
});

document.querySelector('.slick-prev').addEventListener('click',function () {
slider.goTo('prev');
});

document.querySelector('.slick-next').addEventListener('click',function () {
slider.goTo('next');
});
  