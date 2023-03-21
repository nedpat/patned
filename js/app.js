$(document).foundation();

$(document).ready(function () {
  // const navLinks = document.querySelectorAll('#topBar ul li a');
  // console.log('naviLinks', navLinks);
  // // Create a new IntersectionObserver object that will call the
  // // callback function when a section is in view
  // const observer = new IntersectionObserver((entries) => {
  //   console.log('entries', entries);
  //   // Loop through each entry in the observer
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       // Get the ID of the section that is currently in view
  //       const sectionId = entry.target.getAttribute('id');

  //       // Loop through each nav link and remove the 'active' class
  //       navLinks.forEach((link) => {
  //         link.classList.remove('active');

  //         // Add the 'active' class to the link whose href matches
  //         // the ID of the section in view
  //         if (link.querySelector(`a[href="#${sectionId}"]`)) {
  //           console.log('link', link.querySelector(`a[href="#${sectionId}"]`));
  //           link.classList.add('active');
  //         }
  //       });
  //     }
  //   });
  // });

  // // Loop through each section and add it to the observer
  // const sections = document.querySelectorAll('section');
  // sections.forEach((section) => {
  //   observer.observe(section);
  // });

  //   $(window)
  //     .scroll(function () {
  //       var scroll = $(window).scrollTop();

  //       if (scroll >= 50) {
  //         $('.img-work, .img-archives, .img-about').css('background', 'none');

  //         $('.section').css({
  //           'text-indent': '0',
  //           height: '50px',
  //         });
  //         $('.top-bar-section li.active a, .top-bar-section li a, .top-bar .name h1').css(
  //           'line-height',
  //           '50px'
  //         );

  //         $('.top-bar .top-bar-section #contact-me').css({
  //           'background-image': 'none',
  //           position: 'static',
  //           height: '0',
  //         });
  //         $('.top-bar .top-bar-section #contact-me a').css({
  //           color: '#d37b7f',
  //           'font-size': '1.2em',
  //           'line-height': '80px',
  //         });

  //         // $('.top-bar .title-area').addClass('visible animated fadeOutRight');

  //         //$("[data-magellan-expedition-clone]").hide();
  //       }
  //       if (scroll < 50) {
  //         $('.img-work').css(
  //           'background',
  //           "url('http://localhost:8888/img/work_icon.png') no-repeat center center"
  //         );
  //         $('.img-archives').css(
  //           'background',
  //           "url('http://localhost:8888/img/archives_icon.png') no-repeat center center"
  //         );
  //         $('.img-about').css(
  //           'background',
  //           "url('http://localhost:8888/img/about_icon.png') no-repeat center center"
  //         );

  //         $('.section').css({
  //           'text-indent': '-9999px',
  //           height: '120px',
  //         });
  //         $('.top-bar-section li.active a, .top-bar-section li a, .top-bar .name h1').css(
  //           'line-height',
  //           '120px'
  //         );

  //         $('.top-bar, [data-magellan-expedition]').css('border-bottom', 'none');
  //         $('.top-bar .top-bar-section #contact-me').css({
  //           'background-image': "url('http://localhost:8888/img/contactme_bg.png')",
  //           position: 'relative',
  //           height: '97px',
  //         });
  //         $('.top-bar .top-bar-section #contact-me a').css({
  //           color: '#fff',
  //           'font-size': '1em',
  //           'line-height': '120px',
  //         });
  //       }
  //     })
  //     .resize(function () {
  //       $('[data-magellan-expedition-clone]').hide();
  //     });

  //Stripes animation on scroll

  /// Hide all .stripe elements except the first one initially
  $('.stripe:not(:first)').addClass('hidden');

  // When the user scrolls, check if .stripe is in the viewport
  $(window).on('scroll', function () {
    $('.stripe').each(function (index) {
      if (index !== 0 && isElementInViewport($(this), 200)) {
        // If the element is in the viewport and is not the first one, add the 'visible' and 'animated' classes
        $(this).removeClass('hidden').addClass('visible animated fadeInLeft');
      } else if (index === 0 && isElementInViewport($(this), 200)) {
        // If the element is in the viewport and is the first one, just remove the 'hidden' class
        $(this).removeClass('hidden');
      }
    });
  });

  // Helper function to check if an element is in the viewport
  function isElementInViewport(el, offset) {
    var rect = el[0].getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.top <= windowHeight - offset && rect.bottom >= offset;
  }
});
