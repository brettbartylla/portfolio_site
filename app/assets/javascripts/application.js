// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//

//= require jquery
//= require tether
//= require rails-ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require scroll
//= require mobile_nav


$(document).on('turbolinks:load', function() {
    particlesJS('particles-js',
    {
        "particles": {
          "number": {
            "value": 130,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 2,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 150,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
        }
  );
  
    // $('.project-animation').each(function(){
    //     $(this).hide();
    // });
    //set browser height for canvas
    var $homeHeight = $(window).height(); 
    $('#home').css("height",$homeHeight);

    //navigation scripts
    var distance = $('.btn-my-work').offset().top,
    $window = $(window);
    //animation for skillbar
    var distance_skillbar = $('#about').offset().top;
    //animation for projects
    var distance_projects = $('#javascript').offset().top;

    //distances for active link
    var homeLink = $('.home-txt').offset().top;
    var aboutLink = $('#about').offset().top;
    var projectsLink = $('#projects').offset().top;

    $window.scroll(function() {
        //swaps to fixed nav
        if ( $window.scrollTop() >= distance ) {
            // button hit top, change nav styles
            $( ".my-nav").removeClass('nav-default');
            $( ".my-nav").addClass('fixed-nav');
        }
        //swaps to default nav
        if ( $window.scrollTop() <= distance ) {
            // button hit top, change nav styles
            $( ".my-nav").removeClass('fixed-nav');
            $( ".my-nav").addClass('nav-default');
        }
        if ( $window.scrollTop()+100 >= distance_skillbar ) {
            $('.skillbar').each(function(){
                jQuery(this).find('.skillbar-bar').animate({
                    width:jQuery(this).attr('data-percent')
                },1400);
            });
        }
        //home active link
        if ( $window.scrollTop()+50 >= homeLink ) {
            // button hit top, change nav styles
            $('.my-page-link').each(function(){
                $(this).removeClass('active');
            });
            $('.home-link').addClass('active');
        }     
        //about active link
        if ( $window.scrollTop()+50 >= aboutLink ) {
            // button hit top, change nav styles
            $('.my-page-link').each(function(){
                $(this).removeClass('active');
            });
            $('.about-link').addClass('active');
        }
        //projects active link
        if ( $window.scrollTop()+160 >= projectsLink ) {
            // button hit top, change nav styles
            $('.my-page-link').each(function(){
                $(this).removeClass('active');
            });
            $('.portfolio-link').addClass('active');
        }
    });





 

   



});