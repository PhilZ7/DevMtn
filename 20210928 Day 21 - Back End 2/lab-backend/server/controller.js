const houses = require ('./db.json')
let id = 4;

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses)
    },
    deleteHouse: (req, res) => {
        const { houseId } = req.params;

        const tgtIndex = houses.findIndex(function(houseObj) {
            return houseObj.id === parseInt(houseId);
        })

        if (tgtIndex === -1) {
            res.status(404).send('House not found!')
        } else {
            houses.splice(tgtIndex, 1);
            res.status(200).send(houses);
        }
    },
    createHouse: (req, res) => {
        const { address, imageURL, price } = req.body;

        const newHouse = {
            id,
            address,
            imageURL,
            price
        }

        houses.push(newHouse);
        id++;

        res.status(200).send(houses);

    },
    updateHouse: (req, res) => {
        let { houseId } = req.params;
        let { type } = req.body;

        let tgtIndex = houses.findIndex(function(houseObj) {
            return houseObj.id === parseInt(houseId);
        })

        let tgtHouseObj = houses[tgtIndex];
        

        if (type === 'plus') {
            // console.log(tgtHouseObj);
            // console.log(tgtIndex);
            tgtHouseObj.price += 10000;
            
        } else if (type === 'minus') {
            tgtHouseObj.price -= 10000; 
        } else {
            res.status(400).send('Something went wrong.')
        }
        res.status(200).send(houses);
    }
}