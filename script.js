let homeScore = document.getElementById("homescore")
let guestScore = document.getElementById("guestScore")
let winnerString = document.getElementById("winnerString")
let homeCount = 0
let guestCount = 0

guestScore.textContent = guestCount
homescore.textContent = homeCount

function addOneHome() {
    homeCount = homeCount + 1
    console.log(homeCount)
    homeScore.textContent = homeCount
}

function addTwoHome() {
    homeCount = homeCount + 2
    console.log(homeCount)
    homeScore.textContent = homeCount
}

function addThreeHome() {
    homeCount = homeCount + 3
    console.log(homeCount)
    homeScore.textContent = homeCount
}

function addOneGuest() {
    guestCount = guestCount + 1
    console.log(guestCount)
    guestScore.textContent = guestCount
}

function addTwoGuest() {
    guestCount = guestCount + 2
    console.log(guestCount)
    guestScore.textContent = guestCount
}

function addThreeGuest() {
    guestCount = guestCount + 3
    console.log(guestCount)
    guestScore.textContent = guestCount
}

function newGame() {
    homeCount = 0
    guestCount = 0
    homescore.textContent = homeCount
    guestScore.textContent = guestCount
    winnerString.textContent=""
}

function winner() {
    if (homeCount > guestCount) {
        winnerString.textContent = "The winner is: Home!"
    }else if(guestCount>homeCount){
        winnerString.textContent="The winner is: Guest!"
    } 
    else { winnerString.textContent = "" }
}

