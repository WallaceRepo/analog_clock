const hourHand = document.querySelector('[data-hour]')
const minuteHand = document.querySelector('[data-minute]')
const secondHand = document.querySelector('[data-second]')
setInterval(setClock, 1000);

function setClock() {
    const currentDate = new Date();
    const second = currentDate.getSeconds() / 60;
   // console.log(second)
    const minute = (second + currentDate.getMinutes()) / 60
    const hour = (minute + currentDate.getHours()) /12
    
    setRotatation(secondHand, second);
    setRotatation(minuteHand, minute);
    setRotatation(hourHand, hour)
}
function setRotatation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}
setClock()
