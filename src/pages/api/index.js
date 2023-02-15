import axios from 'axios'

export default async function handler(req, res) {
    const getRandomInt = () => Math.floor(Math.random() * 1008) + 1;
    let randNum = getRandomInt(1, 1009)
    let url = 'https://pokeapi.co/api/v2/pokemon/' + randNum;
    try {
        let data = await axios.get(url);
        data = data.data;
        data = {
            pokemonName: data.name,
            sprite: data.sprite[0],
            type: data.types
        }
        return data;
    } catch (e) {
        console.log('NO POKEMON FOUND')
        return e;
    }
}