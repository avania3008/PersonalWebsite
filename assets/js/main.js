const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

function flip_card() {
    let id_card = document.getElementById("id-card")
    id_card.classList.toggle('flipped');
}

const skillsContent = document.getElementsByClassName('skills_content')
const skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills_content skills_closed'
    }
    if(itemClass === 'skills_content skills_closed'){
        this.parentNode.className = 'skills_content skills_opened'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

const expTabs = document.querySelectorAll('[data-target]')
const expTabContents = document.querySelectorAll('[data-content]')

expTabs.forEach(expTab => {
    expTab.addEventListener('click', () => {
        const t = document.querySelector(expTab.dataset.target)
        
        expTabContents.forEach(expTabContent => {
            expTabContent.classList.remove('exp_active')
        })
        t.classList.add('exp_active')

        expTabs.forEach(expTab => {
            expTab.classList.remove('exp_active')
        })
        expTab.classList.add('exp_active')
    })
})

