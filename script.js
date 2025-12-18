// toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// ketik barang menu di klik
document.querySelector('#barang-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// klik di luar slide bar untuk menghilangkan var
const barang = document.querySelector('#barang-menu');
document.addEventListener('click', function (e) {
  if (!barang.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
