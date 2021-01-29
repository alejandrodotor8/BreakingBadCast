import getData from '../utils/getData';

const Home = async () => {
	const characters = await getData();

	const view = `
      <div class="header">
         <ul class="header__list">
            <li class="logo list__item"><img src="./utils/img/bb-logo.svg" alt="Logo" /></li>
            <li class="title list__item">
               <a class="title list__item" href="/">Cast</a>
            </li>
            <li class="list__item"><img class="item__img" src="./utils/img/Search.svg" alt="Search" /></li>
         </ul>
      </div>
         <p class="paragraph">In this app you can check the breaking bad cast.</p>
         <div class="characters" id="characters">
            ${characters
					.map(
						(character) => `
            <div class="item">
            <a class="item__character" href="#/${character.char_id}">
               <img class="character__image" loading="lazy" src="${character.img}" alt="${character.name}" />
               <div class="character__text">
                  <h3 class="text__h3">${character.portrayed}</h3>
                  <h4 class="text__h4">${character.name}</h4>
               </div>
            </a>
            <a class="item__fav" onclick="favAction()">
               <svg xmlns="http://www.w3.org/2000/svg" width="25" height="22.938" viewBox="0 0 25 22.938"><path class="fav-no-logo" d="M21.125,4.5A7.485,7.485,0,0,0,15.5,7.113,7.485,7.485,0,0,0,9.875,4.5,6.808,6.808,0,0,0,3,11.375C3,16.1,7.25,19.95,13.688,25.8L15.5,27.438l1.812-1.65C23.75,19.95,28,16.1,28,11.375A6.808,6.808,0,0,0,21.125,4.5Zm-5.5,19.438-.125.125-.125-.125C9.425,18.55,5.5,14.987,5.5,11.375A4.272,4.272,0,0,1,9.875,7a4.887,4.887,0,0,1,4.462,2.95h2.337A4.856,4.856,0,0,1,21.125,7,4.272,4.272,0,0,1,25.5,11.375C25.5,14.987,21.575,18.55,15.625,23.938Z" transform="translate(-3 -4.5)" /></svg>
            </a>
            </div>
            `
					)
					.join('')}
         </div>
   `;
	return view;
};
export default Home;
