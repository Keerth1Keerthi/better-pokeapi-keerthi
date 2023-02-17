import axios from 'axios'

export default async function handler(req, res) {
    const getRandomInt = () => Math.floor(Math.random() * 1008 + 1);
    let randNum = getRandomInt(1, 1009)

    let url = 'https://pokeapi.co/api/v2/pokemon/' + randNum;
    try {
        let data = await axios.get(url);
        data = data.data;
        data = {
            name: data.name,
            sprite: data.sprites.front_default,
            types: data.types.map(el => el.type.name)
        }
        return res.status(200).json(data);
    } catch (e) {
        console.log('NO POKEMON FOUND')
        return res.status(400).send(e.message);
    }
}