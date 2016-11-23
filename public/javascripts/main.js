$(document).ready(function () {
  /*
   plugin: ScrollSpy - This plugin highlights linked based on
   which section you are on in a page
  */
  $('body').scrollspy({
    target: '.navbar'
  })

  /*
   If the viewport height is less than 1000px then the slide in animations are
   used for the portfolio and code items.
  */
  if ($(window).height() < 1000) {
    // I'm sure there's amore elegant way to do this but this will have to suffice for now :)
    var portfolioItem = $('.portfolio').find('.panel')

    var codeItem = $('.code').find('.panel')

    // var skillItem = $('.skills').find('.panel')

    portfolioItem.css('visibility', 'hidden')

    codeItem.css('visibility', 'hidden')

    // skillItem.css('visibility', 'hidden')

    $('.navbar li').on('activate.bs.scrollspy', function () {
      var activeNavLink = $(this).find('a')

      if (activeNavLink.attr('href') === '#portfolio') {
        portfolioItem.css('visibility', 'visible')

        portfolioItem.addClass('portfolio-item')
      }

      if (activeNavLink.attr('href') === '#code') {
        codeItem.css('visibility', 'visible')

        codeItem.addClass('code-item')
      }

      /*
      if (activeNavLink.attr('href') === '#skills') {
        skillItem.css('visibility', 'visible')

        skillItem.addClass('skill-item')
      }
      */
    })
  }
})
