//
// Hero card image
//

const portalMockupEl = document.getElementById('portal-mockup-graphic')
const demoButtonEl = document.querySelector('#hero-card-content .segment-part button')

const toggleFocusedClassHeroCard = (e) => {
	portalMockupEl.classList.toggle('focused')
	demoButtonEl.classList.toggle('focused')
}

// Event listeners
demoButtonEl.addEventListener('mouseenter', toggleFocusedClassHeroCard)
demoButtonEl.addEventListener('mouseleave', toggleFocusedClassHeroCard)
portalMockupEl.addEventListener('mouseenter', toggleFocusedClassHeroCard)
portalMockupEl.addEventListener('mouseleave', toggleFocusedClassHeroCard)