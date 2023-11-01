let number = document.querySelector(".number").textContent
number = Number(number)
let t
let p
let isUp
countUp = () => {
    clearInterval(t)
    t = setInterval(() => {
        number++
        document.querySelector(".number div").textContent = number}, 
        1000)
    isUp = true
}
Pause = () => {
    clearInterval(t)
    clearInterval(p)
}
countDown = () => {
    clearInterval(t)
    t = setInterval(() => {
        number--
        document.querySelector(".number div").textContent = number}, 
        1000)
    isUp = false
}
Reset = () => {
    clearInterval(t)
    clearInterval(p)
    document.querySelector(".number div").textContent = 0
    number = document.querySelector(".number div").textContent
}
Continue = () => {
    isUp ? countUp() : countDown()
}






