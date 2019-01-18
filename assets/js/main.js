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

//
// Examples segment
//

const examplesDesktopPreview = document.querySelector('#desktop-preview-container img')
const examplesMobilePreview = document.querySelector('#mobile-preview-container img')
const examplesLink = document.querySelector('#examples-homepage-segment .content-wrap .project-details > p > a')

const toggleFocusedClassExamples = (e) => {
	examplesDesktopPreview.classList.toggle('focused')
	examplesMobilePreview.classList.toggle('focused')
	examplesLink.classList.toggle('focused')
}

// Event listeners
examplesDesktopPreview.addEventListener('mouseenter', toggleFocusedClassExamples)
examplesDesktopPreview.addEventListener('mouseleave', toggleFocusedClassExamples)
examplesMobilePreview.addEventListener('mouseenter', toggleFocusedClassExamples)
examplesMobilePreview.addEventListener('mouseleave', toggleFocusedClassExamples)
examplesLink.addEventListener('mouseenter', toggleFocusedClassExamples)
examplesLink.addEventListener('mouseleave', toggleFocusedClassExamples)