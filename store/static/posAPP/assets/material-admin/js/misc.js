(function ($) {
  'use strict';
  $(function () {
    var sidebar = $('.mdc-drawer-menu');
    var body = $('body');

    if ($('.mdc-drawer').length) {
          var drawerEl = document.querySelector('.mdc-drawer');
          // attach drawer only if element and mdc are available
          if (drawerEl && window.mdc && mdc.drawer && mdc.drawer.MDCDrawer) {
            var drawer = mdc.drawer.MDCDrawer.attachTo(drawerEl);
            // toggler icon click function (only if toggler exists)
            var toggler = document.querySelector('.sidebar-toggler');
            if (toggler) {
              toggler.addEventListener('click', function () {
                drawer.open = !drawer.open;
              });
            }
      }
    }

        // Initially collapsed drawer in below desktop
        if (window.matchMedia('(max-width: 991px)').matches) {
          var dismissibleEl = document.querySelector('.mdc-drawer.mdc-drawer--dismissible');
          if (dismissibleEl && dismissibleEl.classList && dismissibleEl.classList.contains('mdc-drawer--open')) {
            dismissibleEl.classList.remove('mdc-drawer--open');
          }
        }

    //Add active class to nav-link based on url dynamically
    //Active class can be hard coded directly in html file also as required
    var current = location.pathname.split("/").slice(-1)[0].replace(/^\/|\/$/g, '');
        if (sidebar && sidebar.length) {
          $('.mdc-drawer-item .mdc-drawer-link', sidebar).each(function () {
            var $this = $(this);
            if (current === "") {
              //for root url
              if ($this.attr('href') && $this.attr('href').indexOf("index.html") !== -1) {
                $(this).addClass('active');
                if ($(this).parents('.mdc-expansion-panel').length) {
                  $(this).closest('.mdc-expansion-panel').addClass('expanded');
                }
              }
            } else {
              //for other url
              if ($this.attr('href') && $this.attr('href').indexOf(current) !== -1) {
                $(this).addClass('active');
                if ($(this).parents('.mdc-expansion-panel').length) {
                  $(this).closest('.mdc-expansion-panel').addClass('expanded'); 
                  $(this).closest('.mdc-expansion-panel').show();
                }
              }
            }
          });
        }

    // Toggle Sidebar items
        if ($('[data-toggle="expansionPanel"]').length) {
          $('[data-toggle="expansionPanel"]').on('click', function () {
            // close other items
            $('.mdc-expansion-panel').not($('#' + $(this).attr("data-target"))).hide(300);
            $('.mdc-expansion-panel').not($('#' + $(this).attr("data-target"))).prev('[data-toggle="expansionPanel"]').removeClass("expanded");
            // Open toggle menu
            $('#' + $(this).attr("data-target")).slideToggle(300, function() {
              $('#' + $(this).attr("data-target")).toggleClass('expanded');
            });
          });
        }


    // Add expanded class to mdc-drawer-link after expanded
    $('.mdc-drawer-item .mdc-expansion-panel').each(function () {
      $(this).prev('[data-toggle="expansionPanel"]').on('click', function () {
        $(this).toggleClass('expanded');
      })
    });

    //Applying perfect scrollbar to sidebar
    if (!body.hasClass("rtl")) {
          if ($('.mdc-drawer .mdc-drawer__content').length && window.PerfectScrollbar) {
            try {
              const chatsScroll = new PerfectScrollbar('.mdc-drawer .mdc-drawer__content');
            } catch (e) {
              console.warn('PerfectScrollbar init failed', e);
            }
          }
        }

  });
})(jQuery);