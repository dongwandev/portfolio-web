function toggleMenu() {
  const $navMenu = document.getElementById('nav__menu');
  $navMenu.classList.toggle('show');
}

function setActiveLink() {
  const path = window.location.pathname;
  const page = path.split('/').pop();

  const $navLinks = document.querySelectorAll('.nav__link');

  $navLinks.forEach((link) => {
    const href = link.getAttribute('href');

    if (
      href === page ||
      (page === '' && href === 'index.html') ||
      (page === 'index.html' && href === 'index.html')
    ) {
      link.classList.add('active-link');
    } else {
      link.classList.remove('active-link');
    }
  });
}

function init() {
  const $navToggle = document.getElementById('nav-toggle');

  if ($navToggle) {
    $navToggle.addEventListener('click', () => {
      toggleMenu();
    });
  }

  const $navLinkList = document.querySelectorAll('.nav__link');
  $navLinkList.forEach((n) =>
    n.addEventListener('click', () => {
      // 모바일 메뉴에서 링크 클릭 시 메뉴 닫기
      const $navMenu = document.getElementById('nav__menu');
      if ($navMenu.classList.contains('show')) {
        toggleMenu();
      }
    }),
  );

  // 플로팅 버튼 (탑 버튼) 로직 추가
  const $floatingButton = document.getElementById('floatingButton');
  if ($floatingButton) {
    $floatingButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 현재 페이지 활성화
  setActiveLink();
}

init();
