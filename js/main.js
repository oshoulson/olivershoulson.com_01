// JavaScript Document
const PrimaryNav = document.querySelector('.primary-navigation');
const NavToggle = document.querySelector('.mobile-nav-toggle');


NavToggle.addEventListener('click', () => {
	const visibility = PrimaryNav.getAttribute('data-visible')
	
	if (visibility === "false") {
		PrimaryNav.setAttribute('data-visible', true);}
	else if (visibility === "true") {
		PrimaryNav.setAttribute('data-visible', false);
	}
})

const AboutMe = document.querySelector('.about');
const Paragraph = document.querySelector('.about-me');

AboutMe.addEventListener('click', () => {
	
	const vis = Paragraph.getAttribute('data-visible')
	
	if (vis === "false") {
		Paragraph.setAttribute('data-visible', true);}
	else if (vis === "true") {
		Paragraph.setAttribute('data-visible', false);
	}
	
})

const Midbut = document.querySelector('.middlemarch');
const Midvid = document.querySelector('.videos');

Midbut.addEventListener('click', () => {
	
	const vis = Midvid.getAttribute('data-visible')
	
	if (vis === "false") {
		Midvid.setAttribute('data-visible', true);}
	else if (vis === "true") {
		Midvid.setAttribute('data-visible', false);
	}
	
})



