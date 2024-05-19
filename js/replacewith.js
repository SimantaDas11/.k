
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

const headerButtons2 = document.querySelectorAll("nav div ul li");

const mainContainers2 = document.querySelectorAll('.main-container');

for (let i = 1; i < mainContainers2.length; i++) {
	mainContainers2[i].style.display = 'none';
}


headerButtons2.forEach((button, index) => {
	button.addEventListener('click', function() {

		mainContainers2.forEach(container => {
			container.style.display = 'none';
		});

		mainContainers2[index].style.display = 'block';
	});
});