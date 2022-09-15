var skillBar = document.querySelectorAll('.skillBar span')
let id = setInterval(()=>{
    skillBar.forEach((s)=>{
        const skill = s.getAttribute('data-skill');
        s.style.width = skill;
    })

},1000)