const btn = document.querySelector("#btn");
const baseURL = https://swapi.dev/api/
const errCallback = err => console.log(err)
//const residentsCallback = ({ data: houses }) => console.log(res)
const residentsCallback = (response) => {
    residentArray = response.data.results[0].residents
    for (let i = 0; i < residentArray.length; i++) {
        axios.get(residentArray[i]).then((res) => {
            console.log(res.data)
        }).catch(errCallback)

    }
}

const getPpl = () => 
axios.get(baseURL + "planets/?search=Alderaan").then(residentsCallback).catch(errCallback)

btn.addEventListener('click', getPpl)