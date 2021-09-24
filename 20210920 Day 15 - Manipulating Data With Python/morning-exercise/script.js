// const { Http2ServerRequest } = require("http2");

function getAbility() {
    axios
    .get('https://pokeapi.co/api/v2/ability')
    .then(res => {
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}