import axios from 'axios'

export default async function handler(req, res) {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    const getBall = (ballType) => {
        if (ballType === 'Poke Ball') {
            return getRandomInt(1, 256)
        } else if (ballType === 'Great Ball') {
            return getRandomInt(1, 201)
        } else if (ballType === 'Ultra Ball' || ballType === 'Safari Ball') {
            return getRandomInt(1, 151)
        } else {
            console.log("Ball most be Poke, Great, Ultra, or Safari")
            return res.status(400)
        }
    }

    const { pokemon, ballType } = req.body
    let url = 'https://pokeapi.co/api/v2/pokemon/' + pokemon;
    let HPmax = null;
    try {
        let data = await axios.get(url);
        HPmax = data.data.stats[0].base_stat
    } catch (e) {
        console.log('NO POKEMON FOUND')
        return res.status(400);
    }
    if (ballType === 'Master Ball') {
        return res.status(200).json({ caught: true })
    }
    let N = getRandomInt(1, 256)
    let BALL = getBall(ballType)
    let HPcurrent = getRandomInt(1, HPmax)
    let f = (HPmax * 255 * 4) / (HPcurrent * BALL)
    let caught = false;
    if (f >= N) {
        caught = true;
    } return res.status(200).json({ caught })
}
