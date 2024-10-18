class announcementBarSlider extends HTMLElement {
  constructor() {
    super();

    this.slider = this.querySelector('.announcement-bar-slider');

    this.desktopShow = this.slider.dataset.desktop;
    this.mobileShow = this.slider.dataset.mobile,
    this.rotation = this.slider.dataset.autoplayTime * 1;

    this.sliderInit();
  }
 
 

  sliderInit() {
    var sliderId = this.slider.getAttribute('id'),
        slider = '#' + sliderId,
        desktop = this.desktopShow * 1,
        mobile = this.mobileShow * 1,
        
        leftArrow = this.querySelector('.swiper-button-prev'),
        RightArrow = this.querySelector('.swiper-button-next');

    // Swiper initialization
    //console.log(this.rotation)
    var swiper = new Swiper(slider, {
      loop: true,
      autoplay: {
        delay: this.rotation,
      },
      navigation: {
        nextEl: RightArrow,
        prevEl: leftArrow,
      },
      slidesPerView: 'auto',
      //autoHeight: true, 
      on: {
          slideChange: function() {
              const announcementBar = announcementBarID;
              document.documentElement.style.setProperty('--announcement-bar', `${Math.round(announcementBar.offsetHeight)}px`);
          }
      }
       
    });

    
  }
 
}

// Define the custom element
customElements.define('announcement-bar', announcementBarSlider);
