const homeBtn1 = document.getElementById("button-h1")   
const homeBtn2 = document.getElementById("button-h2")
const homeBtn3 = document.getElementById("button-h3")
const guestBtn1 = document.getElementById("button-g1")
const guestBtn2 = document.getElementById("button-g2")
const guestBtn3 = document.getElementById("button-g3")
const scoreHome = document.getElementById("score-h")
const scoreGuest = document.getElementById("score-g")
const newGameBtn = document.getElementById("new-game")

let countHome = 0
let countGuest = 0

// Increase points thru the functions 

homeBtn1.addEventListener("click", function(){
    countHome += 1
    scoreHome.textContent = countHome
    showWinner()
})

homeBtn2.addEventListener("click", function(){
    countHome += 2
    scoreHome.textContent = countHome
    showWinner()
})

homeBtn3.addEventListener("click", function(){
    countHome += 3
    scoreHome.textContent = countHome
    showWinner()
})

guestBtn1.addEventListener("click", function(){
    countGuest += 1
    scoreGuest.textContent = countGuest
    showWinner()
})

guestBtn2.addEventListener("click", function(){
    countGuest += 2
    scoreGuest.textContent = countGuest
    showWinner()
})

guestBtn3.addEventListener("click", function(){
    countGuest += 3
    scoreGuest.textContent = countGuest
    showWinner()
})

newGameBtn.addEventListener("click", function(){
    scoreHome.textContent = 0
    scoreGuest.textContent = 0
    countHome = 0
    countGuest = 0
    scoreHome.style.background = "#080001"
    scoreGuest.style.background = "#080001"
})

function showWinner() {
    if(countHome > countGuest){
        scoreHome.style.background = "rgba(0,255,0, 0.5)"
        scoreGuest.style.background = "rgba(255,0,0,0.5)"
    }else if (countHome < countGuest){
        scoreGuest.style.background = "rgba(0,255,0, 0.5)"
        scoreHome.style.background = "rgba(255,0,0,0.5)"
    }else {
       scoreHome.style.background = "rgb(0, 0, 255)"
       scoreGuest.style.background = "rgb(0, 0, 255)"
    }
}




// Refactor code from chat gpt
// // Declare variables for buttons and score boards
// const homeBtns = [
//   document.getElementById("button-h1"),
//   document.getElementById("button-h2"),
//   document.getElementById("button-h3")
// ]
// const guestBtns = [
//   document.getElementById("button-g1"),
//   document.getElementById("button-g2"),
//   document.getElementById("button-g3")
// ]
// const scoreHome = document.getElementById("score-h")
// const scoreGuest = document.getElementById("score-g")
// const newGameBtn = document.getElementById("new-game")

// let countHome = 0
// let countGuest = 0

// // Increase points through the functions
// homeBtns.forEach((btn, index) => {
//   btn.addEventListener("click", function() {
//     countHome += index + 1
//     scoreHome.textContent = countHome;
//     showWinner();
//   });
// });

// guestBtns.forEach((btn, index) => {
//   btn.addEventListener("click", function() {
//     countGuest += index + 1
//     scoreGuest.textContent = countGuest;
//     showWinner();
//   });
// });

// newGameBtn.addEventListener("click", function() {
//   scoreHome.textContent = 0
//   scoreGuest.textContent = 0
//   countHome = 0
//   countGuest = 0
//   scoreHome.style.background = "#080001";
//   scoreGuest.style.background = "#080001";
// });

// function showWinner() {
//   if (countHome > countGuest) {
//     scoreHome.style.background = "rgba(0,255,0, 0.5)"
//     scoreGuest.style.background = "rgba(255,0,0,0.5)"
//   } else if (countHome < countGuest) {
//     scoreGuest.style.background = "rgba(0,255,0, 0.5)"
//     scoreHome.style.background = "rgba(255,0,0,0.5)"
//   } else {
//     scoreHome.style.background = "rgb(0, 0, 255)"
//     scoreGuest.style.background = "rgb(0, 0, 255)"
//   }
// }
