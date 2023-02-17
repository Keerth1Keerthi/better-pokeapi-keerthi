import axios from 'axios'

export default async function handler(req, res) {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }
    const { pokemon } = req.body;
    let url = 'https://pokeapi.co/api/v2/pokemon/' + pokemon;
    let HPmax = null;
    try {
        let data = await axios.get(url);
        HPmax = data.data.stats[0].base_stat
    } catch (e) {
        console.log('NO POKEMON FOUND')
        return res.status(400).json(e);
    }
    let N = getRandomInt(1, 256)
    let BALL = getRandomInt(1, 256)
    let HPcurrent = getRandomInt(1, HPmax)
    let f = (HPmax * 255 * 4) / (HPcurrent * BALL)
    let caught = false;
    if (f >= N) {
        caught = true;
    } return res.status(200).json({ caught })
}