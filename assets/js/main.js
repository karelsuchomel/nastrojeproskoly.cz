const portalMockupEl = document.getElementById('portal-mockup-graphic')
const demoButtonEl = document.querySelector('#hero-card-content .segment-part button')

const toggleMockUpGraphic = (e) => {
	portalMockupEl.classList.toggle('focused')
	demoButtonEl.classList.toggle('focused')
}

// Event listeners
demoButtonEl.addEventListener('mouseenter', toggleMockUpGraphic)
demoButtonEl.addEventListener('mouseleave', toggleMockUpGraphic)
portalMockupEl.addEventListener('mouseenter', toggleMockUpGraphic)
portalMockupEl.addEventListener('mouseleave', toggleMockUpGraphic)
