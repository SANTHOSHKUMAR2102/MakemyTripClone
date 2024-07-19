const cardItem = document.querySelector('.js-card-item')
const cardFont = document.querySelector('.js-cardFonts')
const cardFare = document.querySelector('.js-cardFare')
/*function changeStyle(){
  cardItem.style.borderColor = "red";
} */

cardItem.addEventListener("click", () =>{
  cardItem.style.borderColor = "#008cff"
  cardFont.style.color = "#008cff"
  cardFare.style.color = "#008cff"
})