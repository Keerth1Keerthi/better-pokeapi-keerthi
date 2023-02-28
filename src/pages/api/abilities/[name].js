import axios from 'axios'
export default async function handler(req, res) {
    if (req.method == 'GET') {
        const { name } = req.query;
        let url = 'https://pokeapi.co/api/v2/pokemon/' + name;
        try {
            let data = await axios.get(url);
            let abilities = data.data.abilities;
            for (let i = 0; i < abilities.length; i++) {
                data = await axios.get(abilities[i].ability.url);
                data = data.data.effect_entries[1].effect;
                abilities[i] = {
                    name: abilities[i].ability.name,
                    description: data
                }
            }
            return res.status(200).json({ abilities });
        } catch (e) {
            return res.status(400).json(e);
        }
    }
}