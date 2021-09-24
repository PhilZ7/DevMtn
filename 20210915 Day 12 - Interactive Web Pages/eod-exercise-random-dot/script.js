const viewWidth = document.body.clientWidth;
const viewHeight = document.body.clientHeight;

function getRandomCoord(val) {
    return Math.floor(Math.random() * val) + 1;
}

function moveDot() {
    const theDot = document.querySelector("#dot");
    theDot.remove();

    const newXCoord = getRandomCoord(viewWidth);
    const newYCoord = getRandomCoord(viewHeight)

    const newDiv = document.createElement('div');
    newDiv.setAttribute("id", "dot");
    newDiv.style.left = newXCoord + "px";
    newDiv.style.top = newYCoord + "px";

    document.body.appendChild(newDiv);

    addTheEvent();
}

function addTheEvent() {
    const theDot = document.querySelector('#dot');
    theDot.addEventListener("mouseover", moveDot);
}

addTheEvent();