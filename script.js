/* sidebar select active link */
let sideNavList =document.querySelectorAll('.navigation li');

function activeSideBarLink(){
  sideNavList.forEach(function(item){item.classList.remove('hovered')});
  this.classList.add('hovered');
}
sideNavList.forEach(function(item){item.addEventListener('mouseover', activeSideBarLink)})
