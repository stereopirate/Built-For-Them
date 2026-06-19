const navToggle = document.querySelector('[data-nav-toggle]');
const siteNav = document.querySelector('[data-site-nav]');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
}

document.querySelectorAll('[data-filter]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    document.querySelectorAll('[data-project-card]').forEach((card) => {
      card.hidden = filter !== 'all' && !card.dataset.categories.split(' ').includes(filter);
    });
  });
});

document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = new Date().getFullYear();
});
