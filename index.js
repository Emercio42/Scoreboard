/* HOME */
let pointsHome = 0
let pointsGuest = 0

function plusOneHome() {
    pointsHome++;
    document.getElementById("counter-el-home").innerHTML = pointsHome;
}

function plusTwoHome() {
    pointsHome += 2;
    document.getElementById("counter-el-home").innerHTML = pointsHome;
}

function plusThreeHome() {
    pointsHome += 3;
    document.getElementById("counter-el-home").innerHTML = pointsHome;
}

/* GUEST */

function plusOneGuest() {
    pointsGuest++;
    document.getElementById("counter-el-guest").innerHTML = pointsGuest;
}

function plusTwoGuest() {
    pointsGuest += 2;
    document.getElementById("counter-el-guest").innerHTML = pointsGuest;
}

function plusThreeGuest() {
    pointsGuest += 3;
    document.getElementById("counter-el-guest").innerHTML = pointsGuest;
}