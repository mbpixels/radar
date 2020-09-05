const imgElement = document.querySelector('img');
let cycleEvent = false;
const imgStart = 30;
const imgEnd = 36;

function showImg(arg) {
    imgElement.src = `https://beta.meteo.lt/data/radar/radarlarge+${arg}.gif`;
}

function cycle(i, t) {
    console.log("i: " + i);
    cycleEvent = true;
    showImg(i);
    if (++i <= t) {
        setTimeout(function () {
            cycle(i, t);
        }, 500);
    } else {
        cycleEvent = false;
    }
}

imgElement.addEventListener('click', function () {
    if (!cycleEvent) {
        cycle(30, 36);
    }
});