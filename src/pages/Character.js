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
					<img class="fav-btn" src="../utils/img/fav-no.svg" >
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
