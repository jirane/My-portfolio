
const currentPage = window.location.pathname;
const navLink = document.querySelectorAll('a.nav-link')
//looping over the links
for(let i=0;i<navLink.length;i++){
    if(navLink[i].pathname===currentPage){
        document.querySelectorAll('.active').forEach(ele => ele.classList.remove('active'))
        navLink[i].classList.add('active')
    } 
}
