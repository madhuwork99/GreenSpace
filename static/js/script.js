document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active'); // <-- animation
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !expanded);
  });

  // Close menu when clicking a menu link
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active'); // remove X
      navToggle.setAttribute('aria-expanded', false);
    });
  });
});

window.addEventListener("scroll", function() {

 let scroll = window.pageYOffset;

 document.querySelector(".hero-bg").style.transform =
   "translateY(" + scroll * 0.25 + "px)";
});

document.addEventListener("DOMContentLoaded", function() {
  const counters = document.querySelectorAll('.count');

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;

    const updateCount = () => {
      const increment = Math.ceil(target / 100);
      count += increment;

      if (count < target) {
        counter.innerText = count;
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
});