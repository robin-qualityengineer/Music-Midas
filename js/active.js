$('document').ready(function(){


    //======> Testimonial Slider

  $('.testimonial-slider').slick({
    infinite:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    appendArrows: '.testimonial-slider-wrapper .slider-btns',
    prevArrow:'<button type="button" class="slick-prev"><i class="icon icon-tail-left"></i></button>',
    nextArrow:'<button type="button" class="slick-next"><i class="icon icon-tail-right"></i></button>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          arrows: true

        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
        {
            breakpoint: 480,
            settings: {
            autoplay:true,
            slidesToShow: 1

            }
        }
    ]
  });

  //============= Whatsapp

  $(function() {
  $('#WAButton').floatingWhatsApp({
    phone: '9867577954', //WhatsApp Business phone number International format-
    //Get it with Toky at https://toky.co/en/features/whatsapp.
    headerTitle: 'Chat with us on WhatsApp!', //Popup Title
    popupMessage: 'Hello, how can we help you?', //Popup Message
    showPopup: true, //Enables popup display
    buttonImage: '<img src="https://rawcdn.githack.com/rafaelbotazini/floating-whatsapp/3d18b26d5c7d430a1ab0b664f8ca6b69014aed68/whatsapp.svg" />', //Button Image
    headerColor: 'crimson', //Custom header color
    backgroundColor: 'crimson', //Custom background button color
    position: "right"    
  });
});

  //====================== Music Player




      //======> Composition Slider

  $('.composition-slider').slick({
    infinite:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    appendArrows: '.composition-slider-wrapper .slider-btns',
    prevArrow:'<button type="button" class="slick-prev"><i class="icon icon-tail-left"></i></button>',
    nextArrow:'<button type="button" class="slick-next"><i class="icon icon-tail-right"></i></button>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          arrows: true

        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
        {
            breakpoint: 480,
            settings: {
            autoplay:true,
            slidesToShow: 1

            }
        }
    ]
  });

  


  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
})

//======>  Mobile Menu Activation
$('.main-navigation').meanmenu({
  meanScreenWidth: "992",
  meanMenuContainer: '.mobile-menu',
  meanMenuClose: "<i class='icon icon-simple-remove'></i>",
  meanMenuOpen: "<i class='icon icon-menu-34'></i>",
  meanExpand: "",
});
