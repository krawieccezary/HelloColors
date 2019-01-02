var navBurger = document.getElementsByClassName('nav-burger')[0];
var menu = document.getElementsByClassName('menu')[0];


function openMenuRWD(){
      navBurger.classList.toggle('active');
      menu.classList.toggle('open');
};

navBurger.addEventListener('click', openMenuRWD);


var links = document.querySelectorAll('.link');

function scrollTo(e) {
   var divID = e.target.hash;
   var div = document.querySelector(divID);
   var divTop = div.offsetTop;


}


links.forEach(link => {
   link.addEventListener('click', scrollTo);
});
