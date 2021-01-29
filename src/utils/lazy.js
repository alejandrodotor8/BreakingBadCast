const isIntersecting = (entry) => {
	return entry.isIntersecting;
};
const loadImage = (entry) => {
	const image = entry.target;
	const url = image.dataset.src;

	image.src = url;
	observer.unobserve(image);
};

const observer = new IntersectionObserver((entries) => {
	entries.filter(isIntersecting).forEach(loadImage);
});

export const registerImage = (img) => {
	//intersectionObserver
	observer.observe(img);
};
