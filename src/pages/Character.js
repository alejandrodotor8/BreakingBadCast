import getHash from '../utils/getHash';
import getData from '../utils/getData';
const Character = async () => {
	const id = getHash();
	const character_array = await getData(id);
	const character = character_array[0];
	const view = `
		<div class="character-container">
			<div class="character-img">
				<a class="character-img__back-btn" href="/">
					<img class="back-btn" src="../utils/img/Back.svg" >
				</a>
				<img class="character-img__img" src="${character.img}" >
				<a class="character-img__fav-btn">
					<svg xmlns="http://www.w3.org/2000/svg" width="25" height="22.938" viewBox="0 0 25 22.938"><path class="fav-no-logo" d="M21.125,4.5A7.485,7.485,0,0,0,15.5,7.113,7.485,7.485,0,0,0,9.875,4.5,6.808,6.808,0,0,0,3,11.375C3,16.1,7.25,19.95,13.688,25.8L15.5,27.438l1.812-1.65C23.75,19.95,28,16.1,28,11.375A6.808,6.808,0,0,0,21.125,4.5Zm-5.5,19.438-.125.125-.125-.125C9.425,18.55,5.5,14.987,5.5,11.375A4.272,4.272,0,0,1,9.875,7a4.887,4.887,0,0,1,4.462,2.95h2.337A4.856,4.856,0,0,1,21.125,7,4.272,4.272,0,0,1,25.5,11.375C25.5,14.987,21.575,18.55,15.625,23.938Z" transform="translate(-3 -4.5)" /></svg>
				</a>
			</div>
			<div class="character-text">
				<div class="container-text">
					<h3 class="text__h3">${character.portrayed}</h3>
					<h4 class="text__h4">${character.name}</h4>
				</div>
				<div class="rating">
					<input type="radio" name="star" />
					<input type="radio" name="star" />
					<input type="radio" name="star" />
					<input type="radio" name="star" />
					<input type="radio" name="star" />
				</div>
			</div>
			<div class="character-table">
				<table class="table">
					<tr class="table__row">
						<td class="row-head">Occupation</td>
						<td class="row-body">${character.occupation[0]}</td>
					</tr>
					<tr class="table__row">
						<td class="row-head">Nickname</td>
						<td class="row-body">${character.nickname}</td>
					</tr>
					<tr class="table__row">
						<td class="row-head">Birthday</td>
						<td class="row-body">${character.birthday}</td>
					</tr>
					<tr class="table__row">
						<td class="row-head">Seasons</td>
						<td class="row-body">${character.appearance}</td>
					</tr>
					<tr class="table__row">
						<td class="row-head">Status</td>
						<td class="row-body">${character.status}</td>
					</tr>
				</table>
			</div>
		</div>
   `;
	return view;
};
export default Character;
