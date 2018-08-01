var $ = jQuery.noConflict();
! function(e) {
  "use strict";

  function t() {
    var t;
    t = "#" + e(".section").filter(".is-active").attr("id"), e('a[href="' + t + '"]').addClass("is-active"), s(), w.hasClass("cssanimations") && e(t).find("[data-animation-in]").each(function() {
      var t = e(this),
        a = "fadeIn",
        i = 1;
      t.data("animation-in") && (a = t.data("animation-in")), t.data("animation-in-delay") && (i = t.data("animation-in-delay")), t.css("animation-delay", i + 500 + "ms").addClass("animated").addClass(a)
    }), k.addClass(t.replace("#", "") + "-in"), e(".site-loader").velocity("fadeOut", {
      queue: !1,
      delay: 500,
      duration: 800,
      complete: function() {
        k.addClass("is-loaded"), e(document).trigger("is-loaded")
      }
    })
  }

  function a() {
    var t = e(".site-nav");
    k.toggleClass("nav-in"), k.hasClass("nav-in") ? (t.velocity("stop", !0).velocity("fadeIn", {
      duration: 500
    }), e(".site-nav__inner").velocity("stop", !0).velocity({
      translateY: ["0", "-25%"],
      rotateX: ["0deg", "35deg"],
      opacity: ["1", ".4"]
    }, {
      duration: 500
    })) : (t.velocity("stop", !0).velocity("fadeOut", {
      duration: 500
    }), e(".site-nav__inner").velocity("stop", !0).velocity({
      translateY: ["25%", "0"],
      rotateX: ["-35deg", "0deg"],
      opacity: [".4", "1"]
    }, {
      duration: 500
    }))
  }

  function i() {
    e(".section").filter(".is-active").find("[data-animation-in]").each(function() {
      var t = e(this),
        a = "fadeIn",
        i = 100;
      t.data("animation-in") && (a = t.data("animation-in")), t.data("animation-in-delay") && (i = t.data("animation-in-delay")), t.css("animation-delay", i + "ms").addClass("animated").addClass(a)
    })
  }

  function o() {
    k.addClass("animating"), e("[data-animation-out]").each(function() {
      var t = e(this),
        a = "fadeIn",
        i = "fadeOut",
        o = 100,
        s = 1;
      t.data("animation-in") && (a = t.data("animation-in")), t.data("animation-out") && (i = t.data("animation-out")), t.data("animation-in-delay") && (o = t.data("animation-in-delay")), t.data("animation-out-delay") && (s = t.data("animation-out-delay")), t.css("animation-delay", o + "ms"), t.closest(".section").hasClass("is-active") ? (t.removeClass(a).addClass(i), t.data("animation-out-delay") ? t.css("animation-delay", s + "ms") : t.css("animation-delay", "1ms")) : t.removeClass(a).removeClass(i).removeAttr("style", "animation-delay")
    })
  }

  function s() {
    var t = e(".site-wrap");
    Y || t.perfectScrollbar({
      suppressScrollX: !0
    })
  }

  function n() {
    e(".site-bg__video").remove(), k.addClass("is-site-bg-img")
  }

  function l() {
    function t() {
      i.ss({
        fullscreen: !0,
        duration: _bg_slideshow_duration,
        fadeInDuration: 1500
      })
    }

    function a() {
      i.kenburnsy({
        fullscreen: !0,
        duration: _bg_slideshow_duration,
        fadeInDuration: 1500
      })
    }
    var i = e(".site-bg__img");
    e(".site-bg__video").remove(), k.addClass("is-site-bg-slideshow");
    for (var o = 1; o <= _bg_slideshow_image_amount; o++) i.append('<img src="/img/bg/site-bg-slideshow-' + (o < 10 ? "0" + o : o) + '.gif">');
    Y ? 5 == _bg_style_mobile || 6 == _bg_style_mobile ? t() : 7 != _bg_style_mobile && 8 != _bg_style_mobile || a() : 5 == _bg_style_desktop || 6 == _bg_style_desktop ? t() : 7 != _bg_style_desktop && 8 != _bg_style_desktop || a()
  }

  function d() {
    var t = e(".site-bg__video"),
      a = e(".site-header__icon__audio");
    k.addClass("is-site-bg-video"), t.append('<video id="videoPlayer" autoplay loop><source src="/video/video.mp4" type="video/mp4"></video>');
    var i = document.getElementById("videoPlayer");
    9 == _bg_style_desktop ? (i.muted = !0, a.remove()) : 10 == _bg_style_desktop && (k.addClass("is-audio-on"), a.on("click", function() {
      k.hasClass("is-audio-on") ? (i.muted = !0, k.removeClass("is-audio-on").addClass("is-audio-off")) : k.hasClass("is-audio-off") && (i.muted = !1, k.removeClass("is-audio-off").addClass("is-audio-on"))
    }))
  }

  function r() {
    var t = e(".site-bg__video"),
      a = e(".site-header__icon__audio");
    k.addClass("is-site-bg-video-youtube"), 12 == _bg_style_desktop || 14 == _bg_style_desktop ? (t.attr("data-property", '{videoURL: _bg_video_youtube_url, autoPlay: true, loop: _bg_video_youtube_loop, startAt: _bg_video_youtube_start, stopAt: _bg_video_youtube_end, mute: true, quality: _bg_video_youtube_quality, realfullscreen: true, optimizeDisplay: true, addRaster: false, showYTLogo: false, showControls: false, stopMovieOnBlur: false, containment: "self"}'), t.YTPlayer()) : (t.attr("data-property", '{videoURL: _bg_video_youtube_url, autoPlay: true, loop: _bg_video_youtube_loop, startAt: _bg_video_youtube_start, stopAt: _bg_video_youtube_end, mute: false, quality: _bg_video_youtube_quality, realfullscreen: true, optimizeDisplay: true, addRaster: false, showYTLogo: false, showControls: false, stopMovieOnBlur: false, containment: "self"}'), t.YTPlayer(), k.addClass("is-audio-on"), a.on("click", function() {
      k.hasClass("is-audio-on") ? (t.YTPMute(), k.removeClass("is-audio-on").addClass("is-audio-off")) : k.hasClass("is-audio-off") && (t.YTPUnmute(), k.removeClass("is-audio-off").addClass("is-audio-on"))
    }))
  }

  function c() {
    !_side_bg_effect_parallax || Y || P || e(".site-bg").parallax()
  }

  function u() {
    0 == _bg_effect ? e(".site-bg__canvas").remove() : 1 == _bg_effect ? _() : 2 == _bg_effect ? y() : 3 == _bg_effect && h()
  }

  function _() {
    var t = e(".site-bg__effect");
    e(".site-bg__canvas").remove(), t.length && (t.append('<div class="cloud cloud-01"></div><div class="cloud cloud-02"></div><div class="cloud cloud-03"></div>'), k.addClass("is-site-bg-cloud"), f(), g(), v(), t.velocity({
      translateZ: "0",
      opacity: [_cloud_opacity, "0"]
    }, {
      display: "block",
      duration: 3e3
    })), c()
  }

  function f() {
    e(".cloud-01").velocity({
      translateZ: "0",
      translateX: ["-100%", "100%"]
    }, {
      duration: 25e3,
      easing: "linear",
      queue: !1,
      complete: function() {
        e(this).velocity({
          translateX: "100%"
        }, {
          duration: 0,
          queue: !1,
          complete: f
        })
      }
    })
  }

  function g() {
    e(".cloud-02").velocity({
      translateZ: "0",
      translateX: ["-100%", "100%"]
    }, {
      duration: 35e3,
      easing: "linear",
      queue: !1,
      complete: function() {
        e(this).velocity({
          translateX: "100%"
        }, {
          duration: 0,
          queue: !1,
          complete: g
        })
      }
    })
  }

  function v() {
    e(".cloud-03").velocity({
      translateZ: "0",
      translateX: ["-100%", "100%"]
    }, {
      duration: 45e3,
      easing: "linear",
      queue: !1,
      complete: function() {
        e(this).velocity({
          translateX: "100%"
        }, {
          duration: 0,
          queue: !1,
          complete: v
        })
      }
    })
  }

  function y() {
    var t = e(".site-bg__effect");
    e(".site-bg__canvas").remove(), t.length && (t.append('<div class="star star-01"></div><div class="star star-02"></div><div class="star star-03"></div>'), k.addClass("is-site-bg-parallax-star"), m(), p(), b(), t.velocity({
      translateZ: "0",
      opacity: [_parallax_star_opacity, "0"]
    }, {
      display: "block",
      duration: 3e3
    })), c()
  }

  function m() {
    e(".star-01").velocity({
      translateZ: "0",
      translateY: ["-2000px", "0"]
    }, {
      duration: 5e4,
      easing: "linear",
      queue: !1,
      complete: function() {
        e(this).velocity({
          translateY: "0"
        }, {
          duration: 0,
          queue: !1,
          complete: m
        })
      }
    })
  }

  function p() {
    e(".star-02").velocity({
      translateZ: "0",
      translateY: ["-2000px", "0"]
    }, {
      duration: 1e5,
      easing: "linear",
      queue: !1,
      complete: function() {
        e(this).velocity({
          translateY: "0"
        }, {
          duration: 0,
          queue: !1,
          complete: p
        })
      }
    })
  }

  function b() {
    e(".star-03").velocity({
      translateZ: "0",
      translateY: ["-2000px", "0"]
    }, {
      duration: 15e4,
      easing: "linear",
      queue: !1,
      complete: function() {
        e(this).velocity({
          translateY: "0"
        }, {
          duration: 0,
          queue: !1,
          complete: b
        })
      }
    })
  }

  function h() {
    function t(t) {
      function a() {
        this.x = Math.random() * t.width, this.y = Math.random() * t.height, this.vx = l.config.velocity - .3 * Math.random(), this.vy = l.config.velocity - .3 * Math.random(), this.radius = Math.random() * l.config.star.width
      }
      var o = e(window).width(),
        s = e(window).height(),
        n = Math.round(s * o / 12e3),
        l = e(this),
        d = t.getContext("2d");
      return l.config = {
        star: {
          color: _bg_effect_star_color,
          width: _bg_effect_star_width
        },
        line: {
          color: _bg_effect_star_color,
          width: .4
        },
        position: {
          x: .5 * t.width,
          y: .5 * t.height
        },
        velocity: .2,
        length: n,
        distance: 130,
        radius: 120,
        stars: []
      }, a.prototype = {
        create: function() {
          d.beginPath(), d.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, !1), d.fill()
        },
        animate: function() {
          var e;
          for (e = 0; e < l.config.length; e++) {
            var a = l.config.stars[e];
            a.y < 0 || a.y > t.height ? (a.vx = a.vx, a.vy = -a.vy) : (a.x < 0 || a.x > t.width) && (a.vx = -a.vx, a.vy = a.vy), a.x += a.vx, a.y += a.vy
          }
        },
        line: function() {
          var e, t, a, i, o = l.config.length;
          for (a = 0; a < o; a++)
            for (i = 0; i < o; i++) e = l.config.stars[a], t = l.config.stars[i], e.x - t.x < l.config.distance && e.y - t.y < l.config.distance && e.x - t.x > -l.config.distance && e.y - t.y > -l.config.distance && e.x - l.config.position.x < l.config.radius && e.y - l.config.position.y < l.config.radius && e.x - l.config.position.x > -l.config.radius && e.y - l.config.position.y > -l.config.radius && (d.beginPath(), d.moveTo(e.x, e.y), d.lineTo(t.x, t.y), d.stroke(), d.closePath())
        }
      }, l.createStars = function() {
        var e, i, o = l.config.length;
        for (d.clearRect(0, 0, t.width, t.height), i = 0; i < o; i++) l.config.stars.push(new a), (e = l.config.stars[i]).create();
        e.line(), e.animate()
      }, l.setCanvas = function() {
        t.width = window.innerWidth, t.height = window.innerHeight
      }, l.setContext = function() {
        d.fillStyle = l.config.star.color, d.strokeStyle = l.config.line.color, d.lineWidth = l.config.line.width, d.fill()
      }, l.loop = function(e) {
        e(), i(function() {
          l.loop(function() {
            e()
          })
        })
      }, l.bind = function() {
        e(window).on("mousemove", function(e) {
          l.config.position.x = e.pageX, l.config.position.y = e.pageY
        })
      }, l.init = function() {
        l.setCanvas(), l.setContext(), l.loop(function() {
          l.createStars()
        }), l.bind()
      }, l
    }
    var a = e(".site-bg__canvas");
    k.addClass("is-site-bg-star");
    var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
      window.setTimeout(e, 1e3 / 60)
    };
    t(e("canvas")[0]).init(), a.velocity("transition.fadeIn", {
      duration: 3e3
    });
    var o = function() {
      var e = {};
      return function(t, a, i) {
        i || (i = ""), e[i] && clearTimeout(e[i]), e[i] = setTimeout(t, a)
      }
    }();
    e(window).resize(function() {
      o(function() {
        t(e("canvas")[0]).init()
      }, 800, "")
    }), c()
  }

  function C() {
    function a() {
      var a, i = ["assets/img/bg/home.jpg", "assets/img/bg/about.jpg", "assets/img/bg/service.jpg", "assets/img/bg/contact.jpg"],
        o = [];
      for (a = 0; a < i.length; a++) {
        var s = new Image;
        s.src = i[a], o[a] = s
      }
      var n = imagesLoaded(o);
      k.addClass("is-each"), e(".site-bg__video").remove(), n.on("always", function(e) {
        t()
      })
    }
    Y ? 1 == _bg_style_mobile || 2 == _bg_style_mobile ? a() : t() : 1 == _bg_style_desktop || 2 == _bg_style_desktop ? a() : t()
  }
  var w = e("html"),
    k = e("body"),
    x = e('[data-link="section"]'),
    q = e(".site-nav__menu").find("a"),
    I = x.add(q);
  if (function() {
      if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var e = document.createElement("style");
        e.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")), document.querySelector("head").appendChild(e)
      }
    }(), w.hasClass("desktop")) {
    Y = !1;
    w.addClass("is-desktop")
  } else {
    var Y = !0;
    w.addClass("is-mobile")
  }
  if (w.hasClass("ie9")) var P = !0;
  e("a[href=#]").on("click", function(e) {
      e.preventDefault()
    }), e(".site-footer__social").clone().removeClass("site-footer__social").addClass("site-nav__social").insertAfter(".site-nav__menu"), _site_border && k.addClass("border-on"),
    function() {
      var t = e("#countdown_dashboard");
      _countdown ? t.length && (k.addClass("countdown-on"), t.countDown({
        targetDate: {
          day: _countdown_date[2],
          month: _countdown_date[1],
          year: _countdown_date[0],
          hour: 0,
          min: 0,
          sec: 0,
          utc: _countdown_utc
        },
        omitWeeks: !0
      })) : t.remove()
    }(), e(".site-header__icon__nav").find("a").add(q).on("click", function(e) {
      e.preventDefault(), a()
    }),
    function() {
      var t = e(".section"),
        a = [];
      t.each(function() {
        a.push(this.id)
      }), I.on("click", function(n) {
        var l = e(this),
          d = l.attr("href"),
          r = 1;
        if (n.preventDefault(), !e(d).length || l.hasClass("is-active")) return !1;
        k.hasClass("is-loaded") && (k.hasClass("animating") || (I.filter(".is-active").removeClass("is-active"), o(), w.hasClass("cssanimations") && t.filter(".is-active").find("[data-animation-out]").each(function() {
          var t = e(this).data("animation-out-delay");
          t && (r = t > r ? t : r)
        }), e(".site-loader").velocity("fadeIn", {
          queue: !1,
          delay: r + 500,
          duration: 800,
          complete: function() {
            k.removeClass("animating"), e(".site-wrap").scrollTop(0), e(".site-wrap").perfectScrollbar("update"), e(".section").filter(".is-active").removeClass("is-active"), e(d).addClass("is-active"), e('a[href="' + d + '"]').addClass("is-active"), e.each(a, function(e, t) {
              k.removeClass(t + "-in")
            }), k.addClass(d.replace("#", "") + "-in"), e(".form-group").removeClass("error"), e(".form-notify").removeClass("valid error").html("").hide(), e(this).velocity("fadeOut", {
              delay: 100,
              duration: 800
            }), setTimeout(function() {
              s(), i()
            }, 0)
          }
        })))
      })
    }(),

    e(function() {
      e("#searchInput").keyup(function() {
        "" == e(this).val() ? e(".enableOnInput").prop("disabled", !0) : e(".enableOnInput").prop("disabled", !1)
      })
    }), e(document).ready(function() {
      e("#submit").click(function() {
        alertify.success("Your Message was sent!")
      })
    }), Y ? 3 == _bg_style_mobile || 4 == _bg_style_mobile ? n() : 5 != _bg_style_mobile && 6 != _bg_style_mobile && 7 != _bg_style_mobile && 8 != _bg_style_mobile || e(window).on("load", function() {
      l()
    }) : 3 == _bg_style_desktop || 4 == _bg_style_desktop ? n() : 5 == _bg_style_desktop || 6 == _bg_style_desktop || 7 == _bg_style_desktop || 8 == _bg_style_desktop ? l() : 9 == _bg_style_desktop || 10 == _bg_style_desktop || 11 == _bg_style_desktop ? d() : 12 != _bg_style_desktop && 13 != _bg_style_desktop && 14 != _bg_style_desktop || r(),
    function() {
      function t() {
        var t = e(".site-header__icon__audio"),
          a = document.getElementById("audioPlayer");
        t.on("click", function() {
          e(this), k.hasClass("is-audio-on") ? (a.pause(), k.removeClass("is-audio-on").addClass("is-audio-off")) : k.hasClass("is-audio-off") && (a.play(), k.removeClass("is-audio-off").addClass("is-audio-on"))
        })
      }
      if (2 != _bg_style_mobile && 4 != _bg_style_mobile && 6 != _bg_style_mobile && 8 != _bg_style_mobile && 2 != _bg_style_desktop && 4 != _bg_style_desktop && 6 != _bg_style_desktop && 8 != _bg_style_desktop && 11 != _bg_style_desktop && 14 != _bg_style_desktop || k.append('<audio id="audioPlayer" loop><source src="/audio/audio.mp3" type="audio/mpeg"></audio>'), Y) 2 != _bg_style_mobile && 4 != _bg_style_mobile && 6 != _bg_style_mobile && 8 != _bg_style_mobile || (k.addClass("is-audio-off"), t());
      else if (2 == _bg_style_desktop || 4 == _bg_style_desktop || 6 == _bg_style_desktop || 8 == _bg_style_desktop || 11 == _bg_style_desktop || 14 == _bg_style_desktop) {
        var a = document.getElementById("audioPlayer");
        k.addClass("is-audio-on"), a.play(), t()
      }
    }(), e(window).one("is-loaded", function() {
      u()
    }), e(window).on("load", function() {
      C()
    }),
    function() {
      var t = e("#serviceCarousel");
      t.length && t.owlCarousel({
        rewind: !0,
        nav: !0,
        navText: ["", ""],
        navContainer: ".service__carousel-control",
        navContainerClass: "carousel-nav",
        navClass: ["carousel-prev", "carousel-next"],
        dots: !1,
        margin: 30,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          992: {
            items: 3
          }
        }
      })
    }()
}(jQuery);
