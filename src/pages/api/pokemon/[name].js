import axios from 'axios'
export default async function handler(req, res) {
    const { name } = req.query;
    let url = 'https://pokeapi.co/api/v2/pokemon/' + name;
    console.log(url)
    try {
        let data = await axios.get(url);
        data = data.data;
        data = {
            pokemonName: data.name,
            sprite: data.sprites.front_default,
            types: data.types.map(el => el.type.name)
        }
        return res.status(200).json(data);
    } catch (e) {
        console.log('NO POKEMON FOUND')
        return res.status(400).json(e);
    }
}