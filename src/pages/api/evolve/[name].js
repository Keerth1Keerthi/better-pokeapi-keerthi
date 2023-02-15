import axios from 'axios'
export default async function handler(req, res) {
    const { name } = req.query;
    // let name = 'joltik'
    let url = 'https://pokeapi.co/api/v2/pokemon-species/' + name;
    try {
        let data = await axios.get(url);
        data = data.data;
        url = data.evolution_chain.url;
        data = await axios.get(url)
        data = data.data.chain;
        let currPoke = data;
        while (currPoke.species.name != name && currPoke.evolves_to[0]) {
            currPoke = currPoke.evolves_to[0];
        }

        let evolution = currPoke.species.name
        if (currPoke.evolves_to[0]) {
            evolution = currPoke.evolves_to[0].species.name
        }
        return res.status(200).json({ evolution });
    } catch (e) {
        console.log('NO POKEMON FOUND')
        return res.status(400).json(e);
    }
}