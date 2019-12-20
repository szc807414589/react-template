window.onload = function () {
	getRem(750, 100)
}
window.onresize = function () {
	getRem(750, 100)
}

function getRem(pWidth, pRem) {
	let html = document.getElementsByTagName("html")[0]
	let oWidth = window.innerWidth || document.body.clientWidth || document.documentElement.clientWidth
	if (oWidth > 1100) {
		oWidth = 1100
	}
	html.style.fontSize = oWidth / pWidth * pRem + "px"
}
