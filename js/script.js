document.addEventListener('DOMContentLoaded', () => {
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const aside = document.querySelector('aside');
  const submenu = document.querySelector('.submenu > a');
  const submenuParent = document.querySelector('.submenu');

  // 사이드바 축소/확장 기능
  sidebarToggle.addEventListener('click', () => {
    aside.classList.toggle('collapsed');
  });

  // 서브메뉴 토글 기능
  submenu.addEventListener('click', (e) => {
    e.preventDefault();
    submenuParent.classList.toggle('active');
  });
});
