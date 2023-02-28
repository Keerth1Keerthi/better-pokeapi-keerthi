import axios from 'axios'
export default async function handler(req, res) {
    if (req.method == 'POST') {
        const { pokemon1, pokemon2 } = req.body;
        let url = 'https://pokeapi.co/api/v2/pokemon/' + pokemon1;
        try {
            let data = await axios.get(url);
            let pokemon1stats = 0;
            data.data.stats.forEach((stat) => pokemon1stats += stat.base_stat)
            url = 'https://pokeapi.co/api/v2/pokemon/' + pokemon2;

            data = await axios.get(url);
            let pokemon2stats = 0;
            data.data.stats.forEach((stat) => pokemon2stats += stat.base_stat)
            let winner = pokemon1stats > pokemon2stats ? pokemon1 : pokemon2;
            res.status(200).json({ winner: winner })
        } catch (e) {
            console.log('NO POKEMON FOUND', e.message)
            return res.status(400).json(e);
        }
    }
}