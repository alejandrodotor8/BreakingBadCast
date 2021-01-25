import './styles/styles.scss';
//if (window.innerWidth >= 600) {
//import(/* webpackChunkName: 'styles-desktop' */ './styles-desktop.scss');
//}
import { registerImage } from './lazy';

const characters = document.querySelector('#characters');

function characterInfo() {
	console.log('click');
}

function toggleFav() {
	console.log('fav');
}

function showCast(data) {
	const allCast = [];
	for (let i = 0; i < data.length; i++) {
		const element = data[i];
		const CreateCastNode = () => {
			//? item
			const item = document.createElement('div');
			item.classList.add('item');
			item.dataset.id = element.char_id;
			//? character
			const character = document.createElement('a');
			character.classList.add('item__character');
			character.onclick = characterInfo;
			character.href = '/character';
			//? Image
			const image = document.createElement('img');
			image.classList.add('character__image');
			image.dataset.src = element.img;
			//? Text
			const text = document.createElement('div');
			text.classList.add('character__text');
			text.innerHTML = `
            <h3>${element.portrayed}</h3>
            <h4>${element.name}</h4>
         `;
			//? FavIcon
			const fav = document.createElement('a');
			fav.classList.add('item__fav');
			fav.onclick = toggleFav;
			fav.innerHTML = `
			<img src="./assets/img/fav-no.svg" alt="favorite">
			`;
			character.append(image, text);
			item.append(character, fav);

			registerImage(image);
			return item;
		};
		const newCast = CreateCastNode();
		allCast.push(newCast);
	}
	characters.append(...allCast);
}

async function consultCast() {
	const url = 'https://breakingbadapi.com/api/characters';

	try {
		const answer = await fetch(url);
		const result = await answer.json();
		showCast(result);
	} catch (error) {
		console.log(error);
	}
}

document.addEventListener('DOMContentLoaded', consultCast);
