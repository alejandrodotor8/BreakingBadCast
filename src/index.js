import './styles/styles.scss';

const characters = document.querySelector('#characters');

function showCast(data) {
	for (let i = 0; i < data.length; i++) {
		const element = data[i];
		console.log(element);
		const item = document.createElement('div');
		item.classList.add('item');
		item.innerHTML = `
         <img class="item__image" src="${element.img}" alt="${element.name}" />
         <div class="item__text">
            <h3>${element.portrayed}</h3>
            <h4>${element.name}</h4>
         </div>
         <img class="item__fav" src="./assets/img/fav-no.svg" alt="favorite" />
      `;
		characters.appendChild(item);
	}
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

document.addEventListener('DOMContentLoaded', () => {
	consultCast();
});
