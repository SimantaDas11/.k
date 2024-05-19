
const headerButtons = document.querySelectorAll("header a");

const mainContainers = document.querySelectorAll('.main-container');

for (let i = 1; i < mainContainers.length; i++) {
	mainContainers[i].style.display = 'none';
}


headerButtons.forEach((button, index) => {
	button.addEventListener('click', function() {

		mainContainers.forEach(container => {
			container.style.display = 'none';
		});

		mainContainers[index].style.display = 'block';
	});
});