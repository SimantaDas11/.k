let goDown = document.getElementById("go-down");


function toggleArrowVisibility() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        goDown.style.display = "none";
    } else {
        goDown.style.display = "block";
    }
}

window.addEventListener("scroll", toggleArrowVisibility);


goDown.addEventListener("click", () => {
			window.scrollTo({
				top: document.body.scrollHeight,
				behavior: 'smooth'
			});
		});