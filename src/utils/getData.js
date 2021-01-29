const url = 'https://breakingbadapi.com/api/characters/';

const getData = async (id) => {
	const apiURL = id ? `${url}${id}` : url;
	try {
		const answer = await fetch(apiURL);
		const result = await answer.json();
		return result;
	} catch (error) {
		console.log(error);
	}
};

export default getData;
