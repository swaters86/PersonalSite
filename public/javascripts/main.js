$(document).ready(function () {
  /*
   plugin: ScrollSpy - This plugin highlights linked based on
   which section you are on in a page
  */
  $('body').scrollspy({
    target: '.navbar'
  })

  // If the viewport height is less than 1000 then the slide in animations are used for the portfolio items.
  if ($(window).height() < 1000) {
    var portfolioItems = $('.portfolio').find('.col-md-4')

    portfolioItems.css('visibility', 'hidden')

    $('.navbar li').on('activate.bs.scrollspy', function () {
      var activeNavLink = $(this).find('a')

      if (activeNavLink.attr('href') === '#portfolio') {
        portfolioItems.css('visibility', 'visible')

        portfolioItems.addClass('portfolio-items')
      }
    })
  }
})
