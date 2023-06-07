/* HOME */

let pointsHome = 0
let pointsGuest = 0
let counterElHome = document.getElementById("counter-el-home")
let counterElGuest = document.getElementById("counter-el-guest")

function plusOneHome() {
    pointsHome++;
    counterElHome.textContent = pointsHome
}

function plusTwoHome() {
    pointsHome += 2;
    counterElHome.textContent = pointsHome
}

function plusThreeHome() {
    pointsHome += 3;
    counterElHome.textContent = pointsHome
}

/* GUEST */

function plusOneGuest() {
    pointsGuest++;
    counterElGuest.textContent = pointsGuest
}

function plusTwoGuest() {
    pointsGuest += 2;
    counterElGuest.textContent = pointsGuest
}

function plusThreeGuest() {
    pointsGuest += 3;
    counterElGuest.textContent = pointsGuest
}