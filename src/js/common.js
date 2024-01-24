document.addEventListener('DOMContentLoaded', (event) => {

  const getElement = (context, selector) => {
    if (!context && !selector) {
      return null;
    }

    return context.querySelector(selector);
  };

  document.body.classList.add('loading');

  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 500)

  // "modernizr" func"
  function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;
  }

  // lazy-load
  const el = document.querySelectorAll('.lazy');
  window.observer = lozad(el);
  window.observer.observe();

  // proccess slider
  const planSlider = document.querySelectorAll('[data-slider="plan-slider"]');
  if(planSlider !== null) {

    planSlider.forEach((el) => {
      const planSwiper = new Swiper(el.querySelector('.swiper-container'), {
        freeMode: false,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        simulateTouch: true,
        observer: true,
        observeParents: true,
        centeredSlides: false,
        lazy: {
          loadOnTransitionStart: true,
          loadPrevNextAmount: 2,
          loadPrevNext: true
        },
        loop: false,
        speed: 200,
        slidesPerView: 1,
        slidesPerGroup: 1,
        followFinger: true,
        on: {
          afterInit: (event) => {

          },

        },
        navigation: {
          nextEl: getElement(el.closest('[data-slider="plan-slider"]'), '.js-next'),
          prevEl: getElement(el.closest('[data-slider="plan-slider"]'), '.js-prev'),
          disabledClass: 'swiper-lock'
        },
        pagination: {
          el: el.querySelector('.swiper-pagination'),
          clickable: true,
          type: 'progressbar'
        },
        breakpoints: {
          0: {
            slidesPerView: 1
          },
          440: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          990: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 6,
          }
        },
      });
    })
  }

  // faq slider
  const faqSlider = document.querySelectorAll('[data-slider="faq-slider"]');
  if(faqSlider !== null) {

    faqSlider.forEach((el) => {
      const faqSwiper = new Swiper(el.querySelector('.swiper-container'), {
        freeMode: false,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        simulateTouch: true,
        observer: true,
        observeParents: true,
        centeredSlides: false,
        lazy: {
          loadOnTransitionStart: true,
          loadPrevNextAmount: 2,
          loadPrevNext: true
        },
        loop: false,
        speed: 200,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 24,
        followFinger: true,
        on: {
          afterInit: (event) => {

          },

        },
        navigation: {
          nextEl: getElement(el.closest('[data-slider="faq-slider"]'), '.js-next'),
          prevEl: getElement(el.closest('[data-slider="faq-slider"]'), '.js-prev'),
          disabledClass: 'swiper-lock'
        },
        pagination: {
          el: el.querySelector('.swiper-pagination'),
          clickable: true,
          type: 'progressbar'
        },
        breakpoints: {
          0: {
            slidesPerView: 1
          },
          560: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          990: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 36,
          }
        },
      });
    })
  }

  // faq slider
  const generalSlider = document.querySelectorAll('[data-slider="general-slider"]');
  if(generalSlider !== null) {

    generalSlider.forEach((el) => {
      const generalSwiper = new Swiper(el.querySelector('.swiper-container'), {
        freeMode: false,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        simulateTouch: true,
        observer: true,
        observeParents: true,
        centeredSlides: false,
        lazy: {
          loadOnTransitionStart: true,
          loadPrevNextAmount: 2,
          loadPrevNext: true
        },
        loop: false,
        speed: 200,
        slidesPerView: 1,
        slidesPerGroup: 1,
        followFinger: true,
        on: {
          afterInit: (event) => {

          },

        },
        navigation: {
          nextEl: getElement(el.closest('[data-slider="general-slider"]'), '.js-next'),
          prevEl: getElement(el.closest('[data-slider="general-slider"]'), '.js-prev'),
          disabledClass: 'swiper-lock'
        },
        pagination: {
          el: el.querySelector('.swiper-pagination'),
          clickable: true,
          type: 'progressbar'
        },
      });
    })
  }

  // inview

  const blocks = document.querySelectorAll('.js-inview');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0) {
        entry.target.classList.add('visible');
      } else {

      }
    });
  }, { threshold: 0 });

  blocks.forEach(block => observer.observe(block));

  // scroll to section
  const mobMenu =  document.querySelector('.mobile-menu');
  document.querySelectorAll('.scroll-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var targetSelector = this.getAttribute('data-target');
      var target = document.querySelector(targetSelector);
      var headerHeight = document.querySelector('.header').offsetHeight;
      var offsetTop = target.offsetTop - headerHeight;
      mobMenu.classList.remove('open')

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    });
  });

  // open close menu
  const burger =  document.querySelector('.js-burger');

  const closeMEnu =  document.querySelector('.js-close-menu');
  burger.addEventListener('click', () => {
    mobMenu.classList.add('open')
  })
  closeMEnu.addEventListener('click', () => {
    mobMenu.classList.remove('open')
  })


  // js-copy-link

  const copyLink = document.querySelectorAll('.js-copy-link');

  copyLink.forEach((link) => {
    const input = link.nextElementSibling.querySelector('input');
    link.addEventListener('click', () => {
      input.select();
      document.execCommand("copy");
    })
  })

  // js-show-pass

  const showPass = document.querySelectorAll('.js-show-pass');

  showPass.forEach((pass) => {
    const input = pass.previousElementSibling.querySelector('input');
    pass.addEventListener('click', () => {
      if(!pass.classList.contains('show')) {
        input.setAttribute('type', 'password');
        pass.classList.add('show');
      } else {
        input.setAttribute('type', 'text')
        pass.classList.remove('show');
      }
    })
  })

  // tabs
  const tabsParent = document.querySelectorAll('.js-tabs-wrapper');

  if(tabsParent !== null) {
    tabsParent.forEach((tabdParent) => {
      const buttonTab = tabdParent.querySelectorAll('.js-tabs-button');
      const blockTab = tabdParent.querySelectorAll('.js-tabs-block');

      buttonTab.forEach((button) => {
        const id = button.getAttribute('data-id');

        button.addEventListener('click', () => {
          buttonTab.forEach((buttons) => {
            buttons.classList.remove('is-active')
          })
          blockTab.forEach((blocks) => {
            blocks.classList.remove('is-active')
          })
          button.classList.add('is-active')
          tabdParent.querySelector('.js-tabs-block[data-id="'+ id +'"]').classList.add('is-active');
        })
      })

    })
  }

  // accordions

  const accs = document.querySelectorAll('.js-acc-wrap');

  if(accs !== null) {
    accs.forEach((parent) => {
      const buttons = parent.querySelectorAll('.js-open-acc');
      const contents = parent.querySelectorAll('.js-acc-block');
      const parentIrem = parent.querySelectorAll('.js-acc');

      parentIrem.forEach((patItem) => {
        if(patItem.classList.contains('active')) {
          patItem.querySelector('.js-acc-block').style.maxHeight = patItem.querySelector('.js-acc-block').scrollHeight + "px";
        }
      })

      buttons.forEach((button, index) => {
        button.addEventListener('click', () => {

          if(button.closest('.js-acc').classList.contains('active')) {
            contents[index].style.maxHeight = '0';
            button.closest('.js-acc').classList.remove('active');
          } else {
            contents.forEach((blocks) => {
              blocks.style.maxHeight = '0'
            })
            parentIrem.forEach((parentIrem) => {
              parentIrem.classList.remove('active');
            })
            contents[index].style.maxHeight = contents[index].scrollHeight + "px";
            button.closest('.js-acc').classList.add('active');
          }
        });
      });
    })
  }

  // send form
  const jsForm =  document.querySelectorAll('.js-form');

  if(jsForm !== null) {
    jsForm.forEach((formItem) => {
      let inputs = formItem.querySelectorAll('input, textarea');
      inputs.forEach(function(input) {
        input.addEventListener('input', () => {
          if(input.value.length > 1) {
            input.classList.remove('error');
          } else {
            input.classList.add('error');
          }
        })
      });
      formItem.addEventListener('submit', function(event) {
        event.preventDefault();

        let inputs = formItem.querySelectorAll('input, textarea');
        inputs.forEach(function(input) {
          input.classList.remove('error');
          if(input.classList.contains('hidden-input')) {
            input.closest('.js-custom-select').classList.remove('error');
          }
        });

        var isValid = true;
        inputs.forEach(function(input) {
          if (!input.value) {
            isValid = false;
            input.classList.add('error');
            if(input.classList.contains('hidden-input')) {
              input.closest('.js-custom-select').classList.add('error');
            }
          }
        });

        if (isValid) {
          var formData = new FormData(this);
          var dataArray = [];
          formData.forEach(function(value, key) {
            dataArray.push({ key: key, value: value });
          });

          var xhr = new XMLHttpRequest();
          xhr.open('POST', 'your_php_script.php', true);
          xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
          xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 400) {
              console.log('Data sent successfully');
            } else {
              console.error('Error sending data');
            }
          };
          xhr.send(JSON.stringify(dataArray));
          console.log(dataArray);
        }
      });
    })
  }

  // js-hover-link
  const changeTheme = document.querySelector('.js-change-theme');

  if(Cookies.get('theme') === undefined) {
    Cookies.set('theme', 'dark', { expires: 1 })
  }

  if(Cookies.get('theme') === 'light') {
    document.body.classList.add('light')
    Cookies.set('theme', 'light', { expires: 1 })
  }

  if(changeTheme !== null) {
    changeTheme.addEventListener('click', () => {
      if(Cookies.get('theme') === 'dark') {
        document.body.classList.add('wait')
        setTimeout(() => {
          document.body.classList.add('wait-finish')
        }, 500)
        setTimeout(() => {
          document.body.classList.add('light')
        }, 1000)
        Cookies.set('theme', 'light', { expires: 1 })
        setTimeout(() => {
          document.body.classList.remove('wait')
          document.body.classList.remove('wait-finish')
        }, 1200)
      } else {
        document.body.classList.add('wait')
        setTimeout(() => {
          document.body.classList.add('wait-finish')
        }, 500)
        setTimeout(() => {
          document.body.classList.remove('light')
        }, 1000)
        Cookies.set('theme', 'dark', { expires: 1 })
        setTimeout(() => {
          document.body.classList.remove('wait')
          document.body.classList.remove('wait-finish')
        }, 1200)
      }
    })
  }


  // var firstColumns = document.querySelectorAll('.js-first-column');
  //
  // firstColumns.forEach(function(column) {
  //   var newsNum = column.querySelectorAll('.test-wrap').length;
  //   var totalNews_H = 0;
  //
  //   for (var i = 0; i < newsNum; i++) {
  //     var news_H = column.querySelectorAll('.test-wrap')[i].offsetHeight;
  //     totalNews_H = totalNews_H + news_H;
  //   }
  //
  //   var speed = 1;
  //   animateNews(column);
  //   function animateNews(column) {
  //     var firstNews = column.querySelector('.test-wrap');
  //     var marginTop = parseInt(getComputedStyle(firstNews).marginTop, 10) || 0;
  //     marginTop -= speed;
  //
  //     firstNews.style.marginTop = marginTop + 'px';
  //
  //     if (Math.abs(marginTop) >= firstNews.offsetHeight) {
  //       firstNews.parentElement.appendChild(firstNews);
  //       firstNews.style.marginTop = '0';
  //     }
  //
  //       if(column.classList.contains('second')) {
  //         setTimeout(function() {
  //           animateNews(column);
  //         }, 30);
  //       } else {
  //         setTimeout(function() {
  //           animateNews(column);
  //         }, 40);
  //       }
  //
  //   }
  // });
})
