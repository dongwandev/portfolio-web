function toggleMenu() {
  const $navMenu = document.getElementById('nav__menu');
  $navMenu.classList.toggle('show');
}

function handleFloatingButton() {
  const $floatingButton = document.getElementById('floating-Button');
  $floatingButton.addEventListener('click', () => {
    window.scrollTo({ top: 0 });
  });
}

function init() {
  const $navToggle = document.getElementById('nav-toggle');
  $navToggle.addEventListener('click', () => {
    toggleMenu();
  });

  const $navLinkList = document.querySelectorAll('.nav__link');
  $navLinkList.forEach((n) => n.addEventListener('click', toggleMenu));

  handleFloatingButton();
}

init();

const options = {
  threshold: 1.0,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const sectionId = entry.target.id;
    if (entry.isIntersecting) {
      document
        .querySelector(`.nav__link[href*=${sectionId}]`)
        .classList.add('active-link');

      const $items = document.querySelectorAll(
        `.nav__link:not([href*=${sectionId}])`,
      );
      $items.forEach((el) => el.classList.remove('active-link'));
    }
  });
}, options);

const $SectionList = document.querySelectorAll('.section');
$SectionList.forEach((el) => observer.observe(el));

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
});
scrollReveal.reveal('.home__data, .about__img, .skills__subtitle');
scrollReveal.reveal('.home__img, .about__data, .skills__img', { delay: 500 });
scrollReveal.reveal('.skills__data, .work__link, .contact__input', {
  interval: 500,
});

const typeit = new TypeIt('#typeit', {
  speed: 70,
  startDelay: 1300,
  waitUntilVisible: true,
});
typeit
  .type('안녕하세요!<br/>')
  .type('<strong class="home__title-color">컴퓨터공학과</strong><br/>')
  .type('<strong class="home__title-color">Toffeenut</strong>', { delay: 500 })
  .delete(9, { delay: 900 })
  .type('<strong class="home__title-color">홍동완</strong>입니다!')
  .go();
