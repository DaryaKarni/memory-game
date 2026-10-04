const images = [
  "./assets/apple.jpg", 
  "./assets/bed.jpg", 
  "./assets/chair.jpg",
  "./assets/cup.jpg",
  "./assets/dresser.jpg",
  "./assets/kettle.jpg",
  "./assets/telephone.jpg",
  "./assets/tv.jpg",
  "./assets/apple.jpg", 
  "./assets/bed.jpg", 
  "./assets/chair.jpg",
  "./assets/cup.jpg",
  "./assets/dresser.jpg",
  "./assets/kettle.jpg",
  "./assets/telephone.jpg",
  "./assets/tv.jpg"
];

function randomize(array){
  let arr = [...array];
  for(let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

let flippedCards = [];
let isBoardLocked = false;
let moves = 0;
let pairs = 0;
export function renderCards(){
  const arrImages = randomize(images);
  const grid = document.querySelector('.grid');
  for(const image of arrImages){
    const counter = document.querySelector('.counter');

    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = image.replace('/assets/', '').replace('.jpg', '');

    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');

    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');
    const cardImage = document.createElement('img');
    cardImage.src = image;
    cardImage.alt = `${card.dataset.name} card`;
    cardFront.append(cardImage);

    card.append(cardBack, cardFront);
    card.addEventListener('click', () => {
      if(isBoardLocked || card.classList.contains('flipped')){
        return;
      }
        flippedCards.push(card);
        card.classList.add('flipped');
        moves++;
        counter.textContent = `${moves} moves, ${pairs} of 8 pairs`;
        if(flippedCards.length === 2){
          isBoardLocked = true;
          const matched = flippedCards[0].dataset.name === flippedCards[1].dataset.name 
          ? true : false;
          if(matched){
            flippedCards = [];
            isBoardLocked = false;
            pairs++;
            counter.textContent = `${moves} moves, ${pairs} of 8 pairs`;
          } else{
            setTimeout(() => {
              for(let flipped of flippedCards){
                flipped.classList.remove('flipped');
              }
              flippedCards = [];
              isBoardLocked = false;
            }, 1000);
          }
        if(pairs === 8){
          openModalWin();
        }
      }
    })
    grid.append(card);
  }
}

function openModalWin(){

}