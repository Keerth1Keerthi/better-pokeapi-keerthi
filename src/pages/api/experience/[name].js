import axios from 'axios'
export default async function handler(req, res) {
    const { name, level } = req.query;
    let url = 'https://pokeapi.co/api/v2/pokemon-species/' + name;
    try {
        let data = await axios.get(url);
        data = data.data.growth_rate.url
        url = data;
        data = await axios.get(url);
        let experience = data.data.levels[level - 1].experience;
        return res.status(200).json({ experience });
    } catch (e) {
        console.log('NO POKEMON FOUND', e.message)
        return res.status(400).json(e);
    }
}