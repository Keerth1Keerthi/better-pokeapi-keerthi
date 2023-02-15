import axios from 'axios'

export default async function handler(req, res) {
    const { type } = req.query;
    let url = 'https://pokeapi.co/api/v2/type/' + type;
    try {
        let data = await axios.get(url);
        data = data.data;
        data = {
            pokemon: data.pokemon.map(el => el.pokemon.name)
        }
        return res.status(200).json(data);
    } catch (e) {
        console.log('NO POKEMON FOUND')
        return res.status(400).send(e.message);
    }
}