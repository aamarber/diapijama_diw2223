window.addEventListener("load", displayMenu, false);
document.getElementById('back-cover').style.display = 'block';

function displayMenu() {
  let menuIcon = document.getElementById('menu-icon');
  menuIcon.addEventListener('click', toggleDisplayMenu, false);
}

function toggleDisplayMenu(){
  document.getElementById('menu').classList.toggle('menu-shown');
  document.getElementById('back-cover').classList.toggle('back-cover-display');
  }